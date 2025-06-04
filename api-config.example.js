// API Configuration for OpenAPI Specs Update
// Copy this file to api-config.js and update the URLs for your environment

module.exports = {
  // Production API URLs (default)
  production: {
    ANGANY_AUTH_API_URL: 'https://auth.angany.ai',
    ANGANY_CONFIG_API_URL: 'https://config.angany.ai',
    ANGANY_APP_DATA_API_URL: 'https://data.angany.ai'
  },
  
  // Development API URLs
  development: {
    ANGANY_AUTH_API_URL: 'http://localhost:8001',
    ANGANY_CONFIG_API_URL: 'http://localhost:8000',
    ANGANY_APP_DATA_API_URL: 'http://localhost:8002'
  },
  
  // Staging API URLs  
  staging: {
    ANGANY_AUTH_API_URL: 'https://auth-staging.angany.ai',
    ANGANY_CONFIG_API_URL: 'https://config-staging.angany.ai',
    ANGANY_APP_DATA_API_URL: 'https://data-staging.angany.ai'
  }
}; 