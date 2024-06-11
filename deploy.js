// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const initBalance = 1;
  
  // Get the contract factory
  const SmartContract = await hre.ethers.getContractFactory("SmartContract");
  
  // Deploy the contract
  const smartContract = await SmartContract.deploy(initBalance);
  
  // Wait for the deployment to complete
  await smartContract.deployed();

  // Log the address of the deployed contract
  console.log(`A contract with balance of ${initBalance} ETH deployed to ${smartContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
