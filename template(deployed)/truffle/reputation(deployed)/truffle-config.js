// module.exports = require('@aragon/templates-shared/truffle.js')

const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync("../../../../../Profile/Wallet/.secret").toString().trim();
const ropsten_link = "https://eth-ropsten.alchemyapi.io/v2/VBJPfX_whqc9VbMSO3DRiBy6irhrou9e"
const ropsten_wss_link = "wss://eth-ropsten.alchemyapi.io/v2/VBJPfX_whqc9VbMSO3DRiBy6irhrou9e"
module.exports = {
  networks: {
    ropsten: {
    provider: () => new HDWalletProvider(mnemonic, ropsten_wss_link),
    network_id: 3,       // Ropsten's id
    gas: 5500000,        // Ropsten has a lower block limit than mainnet
    confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
    networkCheckTimeout: 100000,
    websocket: true,
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 1000000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
      }
    }
  },
};
