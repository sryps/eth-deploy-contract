/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.5.11",
  defaultNetwork: "holesky",
  networks: {
    hardhat: {},
    holesky: {
       url: "https://ethereum-holesky.publicnode.com",
       accounts: [`redact`]
    }
 },
};
