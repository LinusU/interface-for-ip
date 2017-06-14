'use strict'

var os = require('os')
var assert = require('assert')
var interfaceForIp = require('.')

os.networkInterfaces = function () {
  return {
    'lo0': [{
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      internal: true
    }, {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      internal: true
    }, {
      address: 'fe80::1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      internal: true
    }],
    'en0': [{
      address: 'fe80::4cb8:2ff:fca9:b223',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      internal: false
    }, {
      address: '192.168.50.215',
      netmask: '255.255.240.0',
      family: 'IPv4',
      internal: false
    }],
    'awdl0': [{
      address: 'fe80::e149:2fff:faa7:2c5a',
      family: 'IPv6',
      internal: false
    }]
  }
}

// Random addresses not present
assert.equal(interfaceForIp('41.242.47.182'), null)
assert.equal(interfaceForIp('161.129.29.194'), null)
assert.equal(interfaceForIp('211.10.128.122'), null)
assert.equal(interfaceForIp('107.216.160.102'), null)
assert.equal(interfaceForIp('140.106.142.254'), null)
assert.equal(interfaceForIp('17.194.217.169'), null)
assert.equal(interfaceForIp('224.198.27.164'), null)
assert.equal(interfaceForIp('173.118.89.120'), null)
assert.equal(interfaceForIp('212.188.143.124'), null)
assert.equal(interfaceForIp('68.21.95.166'), null)

// Addresses on lo0
assert.equal(interfaceForIp('127.0.0.1').name, 'lo0')
assert.equal(interfaceForIp('127.58.13.0').name, 'lo0')
assert.equal(interfaceForIp('127.69.6.243').name, 'lo0')
assert.equal(interfaceForIp('127.127.127.127').name, 'lo0')

// Addresses on en0
assert.equal(interfaceForIp('192.168.48.1').name, 'en0')
assert.equal(interfaceForIp('192.168.49.80').name, 'en0')
assert.equal(interfaceForIp('192.168.50.239').name, 'en0')
assert.equal(interfaceForIp('192.168.51.163').name, 'en0')
assert.equal(interfaceForIp('192.168.52.134').name, 'en0')
assert.equal(interfaceForIp('192.168.53.181').name, 'en0')
assert.equal(interfaceForIp('192.168.54.18').name, 'en0')
assert.equal(interfaceForIp('192.168.55.22').name, 'en0')
assert.equal(interfaceForIp('192.168.56.147').name, 'en0')
assert.equal(interfaceForIp('192.168.57.207').name, 'en0')
assert.equal(interfaceForIp('192.168.58.167').name, 'en0')
assert.equal(interfaceForIp('192.168.59.18').name, 'en0')
assert.equal(interfaceForIp('192.168.60.244').name, 'en0')
assert.equal(interfaceForIp('192.168.61.242').name, 'en0')
assert.equal(interfaceForIp('192.168.62.196').name, 'en0')
assert.equal(interfaceForIp('192.168.63.254').name, 'en0')
