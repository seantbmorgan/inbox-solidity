const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
const { MNEMONIC } = require("./config");

const provider = new HDWalletProvider(
  MNEMONIC,
  "https://rinkeby.infura.io/v3/c4e341309f76487a83a9acca4de78284"
);

const web3 = new Web3(provider);
const INITIAL_MESSAGE = "Hello World.";

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy from ${accounts[0]}`);

  const result = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log(`Contract deployed to ${result.options.address}`);
};

deploy();
