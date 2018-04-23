
module.exports = (shouldJustReturnCountry) => (ip, country) => {
  if (country != null) {
    return shouldJustReturnCountry ? country : `\n${ip} comes from '${country}'\n`
  } else {
    return `\n'${ip}' seems malformed\n`
  }
}
