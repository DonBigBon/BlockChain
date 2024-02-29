const { ethers } = require("ethers");
require("dotenv").config();

const contractABI =
  require("../nft-project/artifacts/contracts/DNBToken.sol/DAAToken.json").abi;

const tokenService = {
  provider: new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_URL),
  contractAddress: "0xe1A48E4d1Fd1E34BD1d7d61A6da31406a7613723",
  contractABI: contractABI,

  initContract: function () {
    return new ethers.Contract(
      this.contractAddress,
      this.contractABI,
      this.provider
    );
  },

  async getBalance(userAddress) {
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
    const contract = this.initContract().connect(signer);

    try {
      const balance = await contract.balanceOf(userAddress) / 10 ** 18;
      console.log(`Balance of ${userAddress}: ${balance}`);
      return balance.toString();
    } catch (error) {
      console.error(`Error getting balance: ${error}`);
      return null;
    }
  },
};

module.exports = tokenService;
