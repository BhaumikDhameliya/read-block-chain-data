//  read latest block number

const ethers = require("ethers");

const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);

async function init() {
  const blockNumber = await provider.getBlockNumber();
  console.log("Current block number: ", blockNumber);
}

init();
