const RoundClient = require('./RoundClient')
let hash = require('./hash')

function getRandomHex (min, max) {
  return hash.int2hex(Math.floor(Math.random() * (max - min + 1)) + min)
}

function miner (host, port, user, pass, rigId) {
  let client = new RoundClient(host, port)

  client.login(user, pass, rigId)

  client.on('job', (params) => {
    console.log(params)
    let jobId = params.job_id
    let blob = params.blob
    let target = hash.hex2int(params.target)

	  console.log(blob)

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
