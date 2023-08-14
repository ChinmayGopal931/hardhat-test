require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-vyper");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  vyper: {
    version: "0.3.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
};
