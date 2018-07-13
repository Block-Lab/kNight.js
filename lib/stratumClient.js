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
  }

  login (login, pass, agent) {
    this.send('login', {login: login, pass: pass, agent: agent})
  }

  getjob () {
    this.send('getjob', {id: this.id})
  }

  submit (username, jobId, nonce, result) {
    this.send('submit', {id: this.id, job_id: jobId, nonce: nonce, result: result})
  }

  send (method, params) {
    let data = JSON.stringify({method: method, params: params}) + '\n'
    this.socket.write(data)
    this.lastRequest = method
  }
}

module.exports = StratumClient
