let hash = require('./hash')
let StratumClient = require('./stratumClient')

function getRandomHex (min, max) {
  return hash.int2hex(Math.floor(Math.random() * (max - min + 1)) + min)
}

function miner (host, port, user, pass, rigId) {
  let client = new StratumClient(host, port)

  client.login(user, pass, rigId)

  client.on('job', (params) => {
    let jobId = params.job_id
    let blob = params.blob
    let target = hash.hex2int(params.target)

    var hexnonce, result
    var bsuccess = false

    while (!bsuccess) {
      hexnonce = getRandomHex(0, 0xFFFFFFFF)
      result = hash.cryptonight(blob, hexnonce, 0, 1).substring(56, 64)
      bsuccess = hash.hex2int(result) < target
    }
    client.submit(jobId, hexnonce, result)
  })
}

module.exports = miner
