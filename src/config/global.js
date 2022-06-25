/**
 * 
 */

const CONFIG_DEV = {
  domain: 'http://127.0.0.1:12347',
}

// Test configuration
const CONFIG_TEST = {
  domain: '/api',
}

// Production configuration 
const CONFIG_PRO = {
  domain: '/api',
}

// Environment Configuration
const ENV_CONFIG_MAP = {
  development: CONFIG_DEV,
  test: CONFIG_TEST,
  production: CONFIG_PRO
}

export default { ...CONFIG_BASE, ...ENV_CONFIG_MAP[process.env.NODE_ENV] };