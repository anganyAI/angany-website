// API Configuration for OpenAPI Specs Update
module.exports = {
  // Production API URLs (default)
  production: {
    ANGANY_AUTH_API_URL: 'https://auth.angany.ai',
    ANGANY_CONFIG_API_URL: 'https://config.angany.ai',
    ANGANY_APP_DATA_API_URL: 'https://data.angany.ai'
  },
  
  // Development API URLs - using dev.angany.ai
  development: {
    ANGANY_AUTH_API_URL: 'https://dev.angany.ai/docs/auth',
    ANGANY_CONFIG_API_URL: 'https://dev.angany.ai/docs/config',
    ANGANY_APP_DATA_API_URL: 'https://dev.angany.ai/docs/app-data'
  },
  
  // Staging API URLs  
  staging: {
    ANGANY_AUTH_API_URL: 'https://auth-staging.angany.ai',
    ANGANY_CONFIG_API_URL: 'https://config-staging.angany.ai',
    ANGANY_APP_DATA_API_URL: 'https://data-staging.angany.ai'
  }
}; 