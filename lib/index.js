let stratumClient = require('./stratumClient')
let hash = require('./hash')
let miner = require('./miner')

exports.stratumClient = stratumClient
exports.Module = hash.Module
delete hash.Module
exports.hash = hash
exports.miner = miner
