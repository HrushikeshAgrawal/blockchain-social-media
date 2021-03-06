# Blockchain Social Media

A social media platform which works on the Ethereum Blockchain (Rinkeby test network). You get paid with ether whenever someone likes your post and tips it.

## App Demo - 
![Gif not supported...](public/demo.gif)

## Getting Started

To run the app on your local machine, clone the repository by typing following commands in your terminal.
```
git clone https://github.com/HrushikeshAgrawal/blockchain-social-media.git
cd blockchain-social-media
npm install OR yarn install
```

### Prerequisites

Following accounts and links will be needed for you to run the app locally.
- Infura account and rinkeby test link from it. Get it from [Infura Home Page](https://infura.io/)
- Metamask account and its secret. Get it from [Metamask chrome extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)

### Initial Setup

After getting the renkeby link from infura and metamask secret, update the following lines in your code:
1. /src/ethereum/web3.js line 11 `const provider = new Web3.providers.HttpProvider("rinkeby link from infura");`
2. /src/ethereum/deploy.js line 5 `"metamask secret",`
3. /src/ethereum/deploy.js line 6 `"rinkeby link from infura"`

Open the terminal and run `npm run compile` and then `npm run deploy`
After successfull deployment, copy the address of deployed contract and do the final change:

4. /src/ethereum/socialMedia.js line 6 `"Address of deployed contract"`

## Running the app

Run `npm start` in your terminal and wait for the app to start.
If the app dosent open up on its own, browse to http://localhost:3000/ in your chrome browser.

## Make sure you are on Rinkeby Test Network on your metamask account and enjoy the app!
