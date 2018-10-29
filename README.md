<h1 align="center">kNight.js</h1>

<div align="center">
  <strong>Cryptonight Miner</strong>
</div>

<br />

<div align="center">
  <a href="https://travis-ci.org/Block-Lab/kNight.js">
    <img src="https://travis-ci.org/Block-Lab/kNight.js.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://www.codefactor.io/repository/github/block-lab/knight.js">
    <img src="https://www.codefactor.io/repository/github/block-lab/knight.js/badge" alt="code quality">
  </a>
  <a href="https://snyk.io/test/github/Block-Lab/kNight.js">
    <img src="https://snyk.io/test/github/Block-Lab/kNight.js/badge.svg" alt="Known Vulnerabilities">
  </a>
</div>

## About

**Note: This is no longer functional for Monero since the release cryptonight_v8**

One of the first completely free alternatives to coin-hive as a CryptoNight miner built with js and WebAssembly.  

kNight can potentially replace the current Ad-based revenue model for sites.

**Note:** Currently uses 100% CPU, and does not terminate old jobs until they are done.

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
