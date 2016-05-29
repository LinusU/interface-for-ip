# Interface for IP

Get the interface on which the specified IP resides.

## Installation

```sh
npm install --save interface-for-ip
```

## Usage

```js
const interfaceForIp = require('interface-for-ip')
const iface = interfaceForIp('192.168.52.219')

console.log(iface)
// { name: 'en0',
//   address: '192.168.50.215',
//   netmask: '255.255.240.0',
//   family: 'IPv4',
//   mac: '48:d7:05:00:00:00',
//   internal: false }
```

## API

### `interfaceForIp(ip: string) => Interface`

Returns the interface on which the specified IP resides, or `null` if not found.

`Interface` has the following properties:

+ `name` (string)
+ `address` (string)
+ `netmask` (string)
+ `family` (string) - `IPv4` or `IPv6`
+ `mac` (string)
+ `internal` (boolean)

## IPv6 support

Currently not implemented :(
