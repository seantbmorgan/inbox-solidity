# Inbox Solidity Contract (Hello World Aplication)

A simple solidity contract which stores and provides a setter to a message.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
```
OR
```sh
$ yarn
```

## Configure
Create a config.js file in the projects root and export an object containing an accounts MNEMONIC
```sh
const MNEMONIC =
  "lorem ipsum dolor sit amet consectetur adipiscing elit cras posuere tincidunt non";

module.exports = { MNEMONIC };
```

## Testing 

```sh
$ npm run test
```
OR
```sh
$ yarn test
```

## Deployment

```sh
$ npm run deploy
```
OR
```sh
$ yarn deploy
```
Will output (log) 
- the address the address the contract is deployed from
- the address the address the contract is deployed to
