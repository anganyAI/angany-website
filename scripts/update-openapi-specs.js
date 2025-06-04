const fs = require('fs');
const path = require('path');
const https = require('https');

// Load API configuration
let apiConfig = {};
try {
  apiConfig = require('../api-config.js');
} catch (error) {
  console.log('⚠️  api-config.js not found, using environment variables only');
}

// Get current environment configuration
const environment = process.env.NODE_ENV || 'development';
const envConfig = apiConfig[environment] || {};

// Configure your API endpoints here
const APIs = [
  {
    name: 'angany-auth',
    // Use config file first, then environment variables, then fallback
    url: envConfig.ANGANY_AUTH_API_URL 
      ? `${envConfig.ANGANY_AUTH_API_URL}/openapi.json`
      : process.env.ANGANY_AUTH_API_URL 
        ? `${process.env.ANGANY_AUTH_API_URL}/openapi.json`
        : 'http://localhost:8001/openapi.json', // fallback for local development
    description: 'Authentication and authorization services powered by Ory Kratos and Hydra'
  },
  {
    name: 'angany-configuration',
    url: envConfig.ANGANY_CONFIG_API_URL 
      ? `${envConfig.ANGANY_CONFIG_API_URL}/openapi.json`
      : process.env.ANGANY_CONFIG_API_URL 
        ? `${process.env.ANGANY_CONFIG_API_URL}/openapi.json`
        : 'http://localhost:8000/openapi.json', // fallback for local development
    description: 'Configuration management for organizations, resources, and telecom settings'
  },
  {
    name: 'angany-app-data',
    url: envConfig.ANGANY_APP_DATA_API_URL 
      ? `${envConfig.ANGANY_APP_DATA_API_URL}/openapi.json`
      : process.env.ANGANY_APP_DATA_API_URL 
        ? `${process.env.ANGANY_APP_DATA_API_URL}/openapi.json`
        : 'http://localhost:8002/openapi.json', // fallback for local development
    description: 'Application data and analytics services'
  },
];

async function downloadOpenAPISpec(api) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(__dirname, '..', 'static', 'openapi', `${api.name}.json`);
    
    // Choose http or https based on URL
    const client = api.url.startsWith('https') ? https : require('http');
    
    console.log(`📡 Downloading ${api.name} from ${api.url}...`);
    
    client.get(api.url, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        try {
          // Validate JSON
          const parsed = JSON.parse(data);
          
          // Enhance the OpenAPI spec with additional metadata
          if (parsed.info) {
            parsed.info.description = api.description;
            parsed.info['x-logo'] = {
              url: '/img/logo/logo-without-text.png',
              altText: 'Angany.ai Logo'
            };
          }
          
          // Ensure directory exists
          fs.mkdirSync(path.dirname(outputPath), { recursive: true });
          
          // Write file
          fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
          console.log(`✅ Downloaded ${api.name} OpenAPI spec`);
          resolve();
        } catch (error) {
          console.error(`❌ Error processing ${api.name}:`, error.message);
          reject(error);
        }
      });
    }).on('error', (error) => {
      // If it's a connection error for local development, create a placeholder
      if (error.code === 'ECONNREFUSED' && api.url.includes('localhost')) {
        console.log(`⚠️  ${api.name} API not available locally, creating placeholder spec...`);
        createPlaceholderSpec(api, outputPath);
        resolve();
      } else {
        console.error(`❌ Error downloading ${api.name}:`, error.message);
        reject(error);
      }
    });
  });
}

function createPlaceholderSpec(api, outputPath) {
  const placeholderSpec = {
    openapi: '3.0.0',
    info: {
      title: `${api.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} API`,
      version: '1.0.0',
      description: `${api.description}\n\n**Note: This is a placeholder specification. The actual API is not currently available.**`,
      'x-logo': {
        url: '/img/logo/logo-without-text.png',
        altText: 'Angany.ai Logo'
      }
    },
    servers: [
      {
        url: api.url.replace('/openapi.json', ''),
        description: 'API Server'
      }
    ],
    paths: {
      '/health': {
        get: {
          tags: ['Health'],
          summary: 'Health check endpoint',
          description: 'Returns the health status of the API',
          responses: {
            '200': {
              description: 'API is healthy',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: {
                        type: 'string',
                        example: 'healthy'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    tags: [
      {
        name: 'Health',
        description: 'API health and status endpoints'
      }
    ]
  };
  
  // Ensure directory exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  
  // Write placeholder file
  fs.writeFileSync(outputPath, JSON.stringify(placeholderSpec, null, 2));
  console.log(`📝 Created placeholder spec for ${api.name}`);
}

async function updateAllSpecs() {
  console.log('🚀 Updating OpenAPI specifications...');
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  try {
    await Promise.all(APIs.map(downloadOpenAPISpec));
    console.log('✅ All OpenAPI specs updated successfully!');
  } catch (error) {
    console.error('❌ Failed to update some specs:', error);
    // Don't exit with error in development to allow building with placeholders
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
}

updateAllSpecs(); 