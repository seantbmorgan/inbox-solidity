const path = require("path");
const fs = require("fs");
const solc = require("solc");

const api = "https://rinkeby.infura.io/v3/c4e341309f76487a83a9acca4de78284";
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");


var input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const compile = {
  interface: output.contracts["Inbox.sol"]["Inbox"].abi,
  bytecode: output.contracts["Inbox.sol"]["Inbox"].evm.bytecode.object,
};

module.exports = compile;
