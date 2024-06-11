# Smart Contract Management (SCM) Starter Project

This project is a simple demonstration of smart contract management using Hardhat, Solidity, and a React frontend. It includes a basic smart contract with deposit and withdraw functionalities and a frontend to interact with the contract.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/)

## Project Structure

- `contracts/SmartContract.sol`: The Solidity smart contract.
- `scripts/deploy.js`: The deployment script for the smart contract.
- `pages/index.js`: The React frontend to interact with the smart contract.
- `hardhat.config.js`: Hardhat configuration file.

## Getting Started

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

### Compile the Smart Contract

Compile the smart contract using Hardhat:

npx hardhat compile

## Start a local blockchain node using Hardhat:

npx hardhat node

## Deploy the smart contract to the local network:

npx hardhat run scripts/deploy.js --network localhost

## Update Frontend Configuration

Open pages/index.js.

## Replace the contractAddress with the address of your deployed contract.

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
Run the Frontend
Start the Next.js development server:
npm run dev

## SmartContract.sol
The smart contract allows the owner to deposit and withdraw funds. It includes the following functions:

getBalance(): Returns the current balance of the contract.
deposit(uint256 _amount): Allows the owner to deposit a specified amount into the contract.
withdraw(uint256 _withdrawAmount): Allows the owner to withdraw a specified amount from the contract.
