'use strict'
let net = require('net')
let EventEmitter = require('events')

class StratumClient extends EventEmitter {
  constructor (host, port) {
    super()

    this.id = 1
    this.host = host
    this.port = port
    this.socket = net.createConnection(port, host)
    this.pending = []

    this.socket.on('data', (data) => {
      data = JSON.parse('[' + data.toString().replace(/}[\n ]*{/, '},{') + ']')
      data.map(i => {
        if (i.result) { this.emit(this.pending.shift(), i.result) }
        if (i.method) { this.emit(i.method, i.params) }
        if (i.error) { this.emit('error', i.error) }
      })
    })
  }

  login (login, pass, rigId) {
    var params = { login: login, pass: pass, rigid: rigId, agent: 'kNight' }

    if (pass === undefined) { delete params.pass }
    if (rigId === undefined) { delete params.rigid }

    this.send('login', params)
    this.pending.push('login')
  }

  getjob () {
    this.send('getjob', { id: this.id })
    this.pending.push('getjob')
  }

  submit (jobId, nonce, result) {
    this.send('submit', { id: this.id, job_id: jobId, nonce: nonce, result: result })
    this.pending.push('submit')
  }

  send (method, params) {
    let data = JSON.stringify({ method: method, params: params, id: this.id })
    this.socket.write(data + '\n')
  }
}

module.exports = StratumClient
