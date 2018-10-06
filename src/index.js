let hash = require('./hash')
let miner = require('./miner')

exports.Module = hash.Module
delete hash.Module
exports.hash = hash
exports.miner = miner
