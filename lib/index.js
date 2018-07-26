let stratumClient = require('./stratumClient.js')
let hash = require('./hash.js')

exports.stratumClient = stratumClient
exports.Module = hash.Module
delete hash.Module
exports.hash = hash
