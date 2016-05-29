'use strict'

var os = require('os')
var net = require('net')
var extend = require('xtend')

function parseIp (ip) {
  var parts = ip.split('.').map(Number)

  return (
    (parts[0] << 24) +
    (parts[1] << 16) +
    (parts[2] << 8) +
    (parts[3] << 0)
  )
}

module.exports = function interfaceForIp (ip) {
  var ipVersion = net.isIP(ip)

  if (ipVersion === 0) {
    throw new Error('Not a valid ip address: ' + ip)
  }

  if (ipVersion !== 4) {
    throw new Error('Currently only IPv4 support is implemented :(')
  }

  var rawIp = parseIp(ip)
  var interfaces = (os.networkInterfaces || os.getNetworkInterfaces)()
  var keys = Object.keys(interfaces)

  var iface
  for (var key of keys) {
    iface = interfaces[key]

    for (var info of iface) {
      if (info.internal) continue
      if (info.family !== 'IPv4') continue

      var address = parseIp(info.address)
      var netmask = parseIp(info.netmask)

      if ((address & netmask) === (rawIp & netmask)) {
        return extend({ name: key }, info)
      }
    }
  }

  return null
}
