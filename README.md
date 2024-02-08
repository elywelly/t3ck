# T3CK

**Work in Progress**

T3CK is the ultimate ticket marketplace revolutionizing the way to buy and sell event tickets! It leverages the power of blockchain and NFT technology to offer a secure, transparent, and seamless ticketing experience.

### DB Design

![DB-Schema](assets/T3CK-DB.png)

### Project Breakdown

The idea if for the smart contract to store details of the events and owner of the smart contracts. But, I also created a DB design to capture the data with a full backend. It will update as the smart contract updates.

Whilst this may seem counter productive to have two separate sources updating, the initial idea of the DB design is more for a later iteration where user functionalities expand beyond just connecting their Metamask wallets. Having another source to store data also makes it easier to track events movements, but a consideration could be possibility of movements of tickets itself from wallet to wallet outside of the platform. The `userId` will then render useless in the DB as it has switched hands extnernally. A way to counter that could be through capturing instead use metamask connections - a later part to explore.

As this is part of an experimental learning project, I'm leaving the backend part of it in to experiment with different ways of building it. A possibility could be two different versions - one with blockchain and one without as regular site.

## Tech Stack & Tools

-   TypeScript
-   Material UI
-   GraphQL
-   Prisma
-   Express (Backend Framework)
-   [React](https://reactjs.org/) (Frontend Framework)
-   [Hardhat](https://hardhat.org/) (Development Framework)
-   [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
-   [MetaMask](https://metamask.io/)
-   Solidity (Smart Contracts & Tests)
-   Javascript (Testing)

## Requirements For Initial Setup

-   Install [NodeJS](https://nodejs.org/en/). Recommended to use the LTS version.
-   Install [MetaMask](https://metamask.io/) on your browser.

## Setting Up

### 1. Clone the Repository

### 2. Install Dependencies for server and client folder:

`$ cd client`
`$ npm install`

`$ cd server`
`$ npm install`

### 3. Run tests for hardhat

`$ cd server`
`$ npx hardhat test`

### 4. Start Hardhat node

`$ cd server`
`$ cd blockchain`
`$ npx hardhat node`

### 5. Run deployment script

In a separate terminal execute:
`$ cd server`
`$ cd blockchain`
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 6. Start frontend

`$ cd client`
`$ npm run start`

### 7. Start backend

`$ cd server`
`$ npm run start`

--

##### Credits: Dapp University - Solidity code
