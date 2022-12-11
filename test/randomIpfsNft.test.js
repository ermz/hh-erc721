const { assert, expect } = require("chai")
const { ethers, network, deployments } = require("hardhat")
const { developmentChains } = require('../helper-hardhat-config')

!developmentChains.includes(network.name)
    ? describe.skip
    : describe('Random IPFS NFT unit tests', async () => {

        let randomIpfsNft, deployer, vrfCoordinatorV2Mock

        beforeEach(async () => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            await deployments.fixture(["mocks", "randomipfs"])
            randomIpfsNft = await ethers.getContract("RandomIpfsNft")
            vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        })

        describe("constructor", () => {
            it("sets starting values correctly", async function () {
                const dogTokenUriZero = await randomIpfsNft.getDogTokenUris(0)
                // const isInitialized = await randomIpfsNft.getInitialized()
                assert(dogTokenUriZero.includes("ipfs://"))
                // assert.equal(isInitialized, true)
            })
        })

        describe("requestNft", () => {
            it("Fails if paymnet isn't send with the request", async () => {
                await expect(randomIpfsNft.requestNft()).to.be.revertedWith(
                    "RandomIpfsNft__NeedMoreETHSent"
                )
            })
            
        })
    })