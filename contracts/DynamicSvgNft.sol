// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DynamicSvgNft is ERC721 {
    // mint
    // store our svg info somewhere
    // some logic to say "Show  X image" or "Show Y Image"

    uint256 private s_tokenCounter;

    constructor() ERC721("Dynamic SVG NFT", "DSN") {}

    function mintNft() public {
        _safeMint(msg.sender, s_tokenCounter);
    }
}