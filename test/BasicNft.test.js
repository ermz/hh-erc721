const { ethers } = require('hardhat')
const { use, expect } = require('chai')
// const { solidity } = require('ethereum-waffle')

// use(solidity)

describe('BasicNft deployment', function () {

    let BasicNFT
    beforeEach(async () => {
        [deployer, user1, user2] = await ethers.getSigners();
        const BasicNFT_contract = await ethers.getContractFactory('BasicNft');
        BasicNFT = await BasicNFT_contract.deploy();
    })

    it("Should mint an NFT", async () => {
        expect(await BasicNFT.getTokenCounter()).to.equal(0);
        await BasicNFT.mintNft();
        expect(await BasicNFT.getTokenCounter()).to.equal(1);
    })

    it("Should increase balance of owner", async () => {
        expect(await BasicNFT.balanceOf(deployer.address)).to.equal(0);
        await BasicNFT.mintNft();
        expect(await BasicNFT.balanceOf(deployer.address)).to.equal(1);
        expect(await BasicNFT.ownerOf(1)).to.equal(deployer.address);
    })
})