#!/usr/bin/env node --harmony

const program = require('commander');

const resolve = require('./src/resolve')
const simplifyIf = require('./src/simplify')

program
  .arguments('<ip>')
  .option('-s, --simplify', 'Simply output the country')
  .option('-v, --verbose', 'Give all the detials')
  .action(function(ip) {
    resolve(ip)
      .then((ipMetaInfo) => {
        if (program.verbose) {
          console.log('')
          console.log(ipMetaInfo)
          console.log('')
        } else {
          console.log(simplifyIf(program.simplify)(ip, ipMetaInfo.country_name)) 
        }
      })
  })
  .parse(process.argv);

