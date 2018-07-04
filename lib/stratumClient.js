'use strict'
let net = require('net')
let EventEmitter = require('events')

class stratumClient extends EventEmitter {
  constructor (host, port, id) {
    super()

    var self = this

    this.id = id || 1
    this.host = host
    this.port = port
    this.socket = net.createConnection(port, host)

    this.socket.on('data', function (data) {
      console.log(data.toString())
      data = JSON.parse(data.toString())

      switch (data.method) {
        case 'mining.notify':
          self.emit('mining.notify', data)
          break
        default:
          console.log(data)
          break
      }
    })
  }

  authorize (username, password) {
    this.socket.write(JSON.stringify({
      method: 'mining.authorize',
      id: this.id,
      params: [username, password]
    }) + '\n')
  }

  subscribe () {
    this.socket.write(JSON.stringify({
      method: 'mining.subscribe',
      id: this.id,
      params: ['t']
    }) + '\n')
  }

  submit (username, jobId, extraNonce2, nTime, nOnce) {
    this.socket.write(JSON.stringify({
      method: 'mining.submit',
      id: this.id,
      params: [username, jobId, extraNonce2, nTime, nOnce]
    }))
  }
}

module.exports = stratumClient
