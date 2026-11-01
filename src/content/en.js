export default {
  lang: 'en', locale: 'en_CA', path: '/en/', alternate: '/', privacyPath: '/en/privacy/',
  title: 'Angany AI — Sylvain Boily’s lab', description: 'Angany AI, Sylvain Boily’s personal lab. Projects, experiments and lessons learned in voice, AI and open source.',
  skip: 'Skip to content', menu: 'Open menu', close: 'Close menu', navigation: 'Main navigation', switchLanguage: 'Lire en français',
  nav: [['projets', 'Projects'], ['parcours', 'Journey'], ['notes', 'Notes'], ['hors-piste', 'Off the beaten path']], contactLink: 'Let’s talk', back: 'Back to the lab',
  hero: {
    introduction: 'Sylvain Boily', roles: 'Entrepreneur · Developer · Explorer', tagline: 'My lab, shared with you.',
    description: 'I explore voice, AI and open source. This is where I share my projects, experiments and what I learn along the way.', current: 'Currently CTO at', company: 'Tchat N Sign', cta: 'Explore my projects', location: 'Québec, Canada',
    imageAlt: 'Mountain ridges seen from above, photographed by Hanson Lu', imageCaption: 'Keep exploring', imageSub: 'In code. And out in the world.', imageIndex: 'Field notes / 01', note: 'Since 2004', noteDetail: 'Ideas turned into projects', scroll: 'Keep exploring',
  },
  now: {
    label: '01 / Right now', title: 'What I’m building today', intro: 'New ways to work together. Open building blocks to make them happen.',
    luge: { type: 'Active project', title: 'Luge', subtitle: 'An AI colleague on the team', description: 'Memory, tools and the ability to act. I’m building Luge to make AI a participant in the everyday work of a company.', link: 'Let’s talk about Luge', tags: ['AI', 'Collaboration', 'Automation'], center: 'An objective', orbit: ['Memory', 'Tools', 'Actions'], graphicLabel: 'Luge connects an objective with memory, tools and actions.' },
    roomkit: { type: 'Founder · Open source', title: 'RoomKit', subtitle: 'One conversation, every channel', description: 'A Python framework bringing voice, messages, people and AI agents into the same conversation space.', link: 'Explore RoomKit', tags: ['Python', 'Voice AI', 'MIT'], codeComment: 'One room. Every possibility.', graphicLabel: 'One conversation connects voice, messages and agents.', channels: ['Voice', 'Messages', 'Agents'] },
    role: 'My day to day', roleText: 'CTO at Tchat N Sign', roleDetail: 'Communication, electronic signatures and AI for financial services.', roleLink: 'Meet the company',
  },
  openSource: {
    label: '02 / Out in the open', title: 'Code worth sharing', intro: 'Personal projects and contributions. Ready to explore, use and build upon.',
    filters: [['all', 'All'], ['ai', 'AI & automation'], ['telecom', 'Telecom'], ['home', 'Smart home']], filterLabel: 'Filter open source projects', result: 'projects shown', link: 'More on GitHub',
    descriptions: [
      'An async Python client with a Rust core to connect agents to Buzz, Block’s collaborative workspace.',
      'Wazo telephony inside Node-RED’s visual workflows.',
      'My contributions to native iOS and Android calling in the React Native WebRTC ecosystem.',
      'Audio and video RTP/RTCP streams, directly in async Python.',
      'A small SIP library connecting telephony with voice AI applications.',
      'A bridge between Open WebUI conversations and n8n automations.',
      'Consul service discovery for Asterisk infrastructure.',
      'Control Hubitat devices and respond to smart home events from n8n, with tools for AI agents.',
    ],
  },
  journey: {
    label: '03 / The journey so far', title: 'It all starts\nwith curiosity', intro: 'A DOS PC with no hard drive. Linux a few years later. Then the desire to make it my profession, and to build companies of my own.',
    years: [
      { date: '≈ 1988', title: 'The first computer', text: 'A DOS PC with no hard drive. Where the story begins.' },
      { date: '1998', title: 'Discovering Linux', text: 'A world of software you can explore, understand and change.' },
      { date: '2001', title: 'Making a career in IT', text: 'From discovering technology to working with it every day.' },
      { date: '2004', title: 'Becoming an entrepreneur', text: 'The start of several ventures in communication and open source software.' },
    ],
    venturesTitle: 'Ventures that shaped the journey',
    ventures: [
      { name: 'XiVO', role: 'Project founder', text: 'Making business telephony open, accessible and adaptable.', url: 'https://www.xivo.solutions/' },
      { name: 'Wazo', role: 'Founder', text: 'Turning communications into a programmable platform, built around APIs and open source.', url: 'https://wazo.io/' },
    ],
    today: 'Today', todayText: 'Luge, RoomKit and Tchat N Sign. The exploration continues.', statement: 'Build useful tools.\nShare what I learn.',
  },
  notes: {
    label: '04 / Notes & conversations', title: 'Ideas along the way', intro: 'Lessons learned, conversations and technical explorations.', more: 'My writing on LinuxFr',
    items: [
      { type: 'Interview', year: '2026', title: 'Twenty years in telecom, and what’s next', description: 'My journey and perspective on voice AI.', source: 'Voice AI Space', language: 'EN', number: '01' },
      { type: 'Article', year: '2026', title: 'Your voice assistant doesn’t need the cloud', description: 'Exploring a fully local voice pipeline.', source: 'RoomKit blog', language: 'EN', number: '02' },
      { type: 'Article', year: '2026', title: 'When RoomKit meets Buzz', description: 'AI agents inside a Nostr team workspace.', source: 'RoomKit blog', language: 'EN', number: '03' },
      { type: 'Talk · PDF', year: '2019', title: 'Having fun with telecommunication', description: 'A presentation at Kamailio World.', source: 'Kamailio World', language: 'EN', number: '04' },
    ],
  },
  offscreen: {
    label: '05 / Off the beaten path', title: 'Curiosity\ndoesn’t take days off', intro: 'Some projects simply start with “what if we tried?”.',
    games: [
      { name: 'Dragon & Phoenix', type: 'Card game', title: 'A round of Gang of Four?', description: 'My personal game project. Cards, strategy and the pleasure of building something just to play.', link: 'Let’s play', url: 'https://www.dragon-and-phoenix-game.com/', visual: 'cards', tags: 'Game · Strategy · Just for fun' },
      { name: 'DnDKit', type: 'Dungeons & Dragons', title: 'What if AI led the adventure?', description: 'An AI game master for D&D 5e. Several players, playing by voice with RoomKit. The server tracks dice, characters and combat.', link: 'Explore DnDKit', url: 'https://github.com/sboily/dndkit', visual: 'dice', tags: 'Roleplaying · Voice · MCP' },
    ],
    personalTitle: 'And when I close the laptop…', personal: 'I’m a father of two daughters, a private pilot, and I enjoy skiing and playing guitar. There’s plenty to explore away from a screen, too.',
    interests: [['airplane-tilt', 'Private pilot'], ['mountains', 'Skiing'], ['guitar', 'Guitar'], ['users', 'Father of two daughters']], dndCredit: 'DnDKit began as a fork of gamemaster-mcp, then was largely rewritten for multiplayer voice play.',
  },
  contact: { label: 'The next chapter', title: 'An idea to share?', text: 'Building a company, contributing code, talking voice or AI… Good adventures often start with a conversation.', cta: 'Let’s write what’s next', copy: 'Copy email address', copied: 'Email address copied', copyError: 'Copy unavailable. You can select the email address.' },
  footer: { signature: 'Sylvain Boily’s lab, from Québec.', top: 'Back to top', privacy: 'Privacy', photo: 'Photo: Hanson Lu / Unsplash', source: 'This site’s code' },
  privacy: {
    title: 'A simple site, including your data', paragraphs: [
      'This personal website is published by Sylvain Boily. You can reach me at sylvainboilydroid@gmail.com.',
      'This site sets no cookies, includes no analytics and uses no local browser storage. Fonts and images are hosted with the site.',
      'Project and social links take you to external sites with their own privacy policies. The contact link opens your email application.',
      'As with any website, the hosting provider may process technical information needed to deliver pages, including your IP address and request logs.',
      'The portrait comes from my GitHub profile. The mountain photograph is by Hanson Lu on Unsplash. Icons are from Phosphor Icons, and Manrope is distributed under the SIL Open Font License.',
    ],
  },
  notFound: { title: 'A little detour', text: 'This page doesn’t exist, or has moved. The field notes are waiting just over here.', link: 'Find the way back' },
};
