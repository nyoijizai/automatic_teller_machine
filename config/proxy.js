const env = require('./env')

const baseUrl = env.baseUrl

module.exports = {
  proxyTable: {
    '/web/api/**': baseUrl
  }
}
