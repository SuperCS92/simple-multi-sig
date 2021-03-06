require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");



extendEnvironment((hre) => {
  const Web3 = require("web3");
  hre.Web3 = Web3;

  // hre.network.provider is an EIP1193-compatible provider.
  hre.web3 = new Web3(hre.network.provider);
});

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ACC1_PRIVATE_KEY = process.env.ACC1_PRIVATE_KEY;

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
        },
        localhost: {
        },
        mumbai: {
          url: MUMBAI_RPC_URL,
          accounts: [PRIVATE_KEY],
          saveDeployments: true,
          gas: 2100000,
          gasPrice: 8000000000
      }
  },
  solidity: "0.8.12",

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    //apiKey: "NS29C9SIXKZ2E2HTP2GD9C8WPNT8RN231I" //kovan api key
    apiKey: "WJ4U4JXHW5CF6WQF212MDJB5XJX9N6TTQM"  //polygon-mumbai api key
  }
};

