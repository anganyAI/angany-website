import { createServer } from 'node:http';
import { watch, createReadStream } from 'node:fs';
import { stat, readFile } from 'node:fs/promises';
import { join, resolve, extname } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { build, root, output } from './build.mjs';

const preview = process.argv.includes('--preview');
const port = Number(process.env.PORT || 4173);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };
if (!preview) await build();
const clients = new Set();
const execute = promisify(execFile);
const reloadScript = `<script>new EventSource('/__reload').onmessage=()=>location.reload();</script>`;
const server = createServer(async (req, res) => {
  let path;
  try { path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end('Bad request'); return; }
  if (!preview && path === '/__reload') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }
  let file = resolve(output, '.' + path);
  if (!file.startsWith(output + '/') && file !== output) { res.writeHead(403).end('Forbidden'); return; }
  let code = 200;
  try {
    if ((await stat(file)).isDirectory()) {
      if (!path.endsWith('/')) { res.writeHead(301, { Location: path + '/' }).end(); return; }
      file = join(file, 'index.html');
    }
    if (!(await stat(file)).isFile()) throw new Error('Not a file');
  } catch { file = join(output, path.startsWith('/en/') ? 'en/404.html' : '404.html'); code = 404; }
  try {
    res.writeHead(code, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    if (req.method === 'HEAD') { res.end(); return; }
    if (!preview && extname(file) === '.html') res.end((await readFile(file, 'utf8')).replace('</body>', reloadScript + '</body>'));
    else createReadStream(file).on('error', () => res.destroy()).pipe(res);
  } catch { res.end('Build in progress. Reload in a moment.'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Local: http://localhost:${port}\n${preview ? 'Static preview' : 'Watching src/ and assets/ for changes'}`));
server.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
if (!preview) {
  let timer;
  let building = false;
  let pending = false;
  async function rebuild() {
    if (building) { pending = true; return; }
    building = true;
    try {
      // Fresh module graph also picks up edits to shared project references.
      const { stdout } = await execute(process.execPath, [join(root, 'scripts/build.mjs')]);
      process.stdout.write(stdout);
      clients.forEach((client) => client.write('data: reload\n\n'));
    }
    catch (error) { console.error(error); }
    finally { building = false; if (pending) { pending = false; await rebuild(); } }
  }
  for (const folder of ['src', 'assets']) watch(join(root, folder), { recursive: true }, () => {
    clearTimeout(timer); timer = setTimeout(rebuild, 120);
  });
}
