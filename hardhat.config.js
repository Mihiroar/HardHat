/** @type import('hardhat/config').HardhatUserConfig */
// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY ="";
const SEPOLIA_PRIVATE_KEY ="";
module.exports = {
  solidity: "0.8.24",


  networks: {
    sepolia:{
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    }
  }
};
