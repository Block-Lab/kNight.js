let cn = require('./cryptonight/cn')

function zeroPad (num, places) {
  var zero = places - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join('0') + num
}

function hex2int (s) {
  return parseInt(s.match(/[a-fA-F0-9]{2}/g).reverse().join(''), 16)
}

function int2hex (i) {
  return (zeroPad(i.toString(16), 8)).match(/[a-fA-F0-9]{2}/g).reverse().join('')
}

var cryptonight = cn.cwrap('hash_cn', 'string', ['string', 'string', 'number', 'number'])

module.exports = {
  zeroPad: zeroPad,
  hex2int: hex2int,
  int2hex: int2hex,
  cryptonight: cryptonight,
  Module: cn
}
