'use strict'
const baseUrl = process.env.BASE_URL
module.exports = {
  BASE_URL: baseUrl ? `"${baseUrl}"` : null
}
