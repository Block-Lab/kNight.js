const WebSocket = require('ws')

class RoundClient extends EventEmitter {
  constructor (host) {
    super()

    this.ws = new WebSocket(host)
    this.ws.on('message', (msg) => { this.emit('data', msg) })
  }

  login (address, rigId) {
    this.ws.send(`1,${address},${rigId}`)
  }

  getJob () {
    this.send('2')
  }

  submit (jobId, nonce, result) {
    this.send(`3,${jobId},${nonce},${result}`)
  }
}
