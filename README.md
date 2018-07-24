[![Build Status](https://travis-ci.org/Block-Lab/kNight.js.svg?branch=master)](https://travis-ci.org/Block-Lab/kNight.js)
[![CodeFactor](https://www.codefactor.io/repository/github/block-lab/knight.js/badge)](https://www.codefactor.io/repository/github/block-lab/knight.js)
[![Known Vulnerabilities](https://snyk.io/test/github/Block-Lab/kNight.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Block-Lab/kNight.js?targetFile=package.json)

# Status

- [x] Monero Stratum Protocol
- [x] CryptoNight Hash
- [ ] Integrating with Node.js
- [ ] Working Release

# kNight.js

One of the first completely free alternatives to coin-hive as a CryptoNight miner built with Node.js and WebAssembly.  
kNight can potentially replace the current Ad-based revenue model for sites.

## Major Supported Currencies

- Monero
- Electroneum

## Supported Algorithms

  - 1MiB scratchpad memory
      - cryptonight_lite
      - cryptonight_lite_v7
  - 2MiB scratchpad memory
      - cryptonight
      - cryptonight_v7

## Acknowledgements

The CryptoNight hash used is largely copied from [notgiven688/webminerpool](https://github.com/notgiven688/webminerpool/tree/master/hash_cn/webassembly) which is based on the Monero code.
