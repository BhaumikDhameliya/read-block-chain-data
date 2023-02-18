const ethers = require("ethers");

const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);

async function init() {
  //ens addresses also work, like vitalik.eth
  const balance = await provider.getBalance(
    "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
  );
  const formattedBalance = ethers.formatEther(balance);
  console.log(`Ether balance of Vitalik Buterin: ${formattedBalance}`);
}

init();
