const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync("../../../Profile/Wallet/.secret").toString().trim();
// console.log(mnemonic);
const rinkeby_link = "https://eth-rinkeby.alchemyapi.io/v2/UGFXde7GILK8e9amfwEvPby_WBFF-HvY"
const ropsten_link = "https://eth-ropsten.alchemyapi.io/v2/VBJPfX_whqc9VbMSO3DRiBy6irhrou9e"
module.exports = {
  networks: {
    // private: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://rpc.testnet.dex.io`),
    //   network_id: 3603102,
    //   production: true
    // },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, rinkeby_link),
      network_id: 4,
      production: true
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, ropsten_link),
      network_id: 3,
      production: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.4",
      parser: "solcjs"
    }
  },
};
