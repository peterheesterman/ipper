
const fetch = require('node-fetch')

module.exports = async (ip) => {
  return await fetch(`https://ipapi.co/${ip}/json/`).then((res) => {
    return res.json()
  }).then((json) => {
    return json
  })
}
