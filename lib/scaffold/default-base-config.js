'use strict';

var path = require('path');

/**
 * Will return the path and default bitcore-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to bitcoin database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }
  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 3001,
      services: ['bitcoind', 'web'],
      servicesConfig: {
        bitcoind: {
          // spawn: {
          //   datadir: options.datadir || path.resolve(process.env.HOME, '.komodo'),
          //   exec: path.resolve(__dirname, '../../bin/komodod')
          // }
          connect: [
            {
              rpchost: "127.0.0.1",
              rpcport: 39656,
              rpcuser: "yoursecurerpcuser",
              rpcpassword: "yoursecurerpcpassword",
              zmqpubrawtx: "tcp://127.0.0.1:28332"
            }
          ]
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
