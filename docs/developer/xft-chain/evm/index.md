---
id: evm
order: 4
title: EVM compatibility
contributors: <William Freudenberger:william@centrifuge.io>
category: subpage
---
# XFT Ethereum Compatibility

XFT merges the capabilities of the Ethereum and Polkadot ecosystems, enabling developers to utilize Ethereum’s established tools and infrastructure alongside Polkadot’s scalable and interoperable features.
The sections that follow outline the specifics of Ethereum compatibility, underscore important elements, and delineate the primary distinctions between XFT and Ethereum, providing clarity for Ethereum developers on what to expect.

## EVM compatibility

XFT features a fully integrated Ethereum Virtual Machine (EVM), enabling the execution of smart contracts written in Solidity or other EVM-compatible languages.

## Accounts

Ethereum addresses (H160) are adapted for use on XFT by expanding them to fit the Substrate address format.
This involves adding some extra information to ensure compatibility with XFT’s system:

* **Chain ID**: The EVM chain ID is added as 8 bytes in big-endian format.
* **Tag**: The address is tagged with "EVM".
* **Zero** Byte: A single zero byte is appended.

This enhanced format facilitates the recognition of Ethereum addresses within XFT and enables their conversion back to the original.

**Example**: The Ethereum address `0x7F429e2e38BDeFa7a2E797e3BEB374a3955746a4` is converted to the XFT address `0x7F429e2e38BDeFa7a2E797e3BEB374a3955746a400000000000007ef45564d00` which is equivalent to `4eDcBEZ6Kor2HGLhX9XUQd9j3t69G9zs17B1E5AfYfQ2LNqY` in the XFT [SS58 address format](https://docs.substrate.io/reference/glossary/#ss58-address-format).

## JSON-RPC Support

XFT offers full JSON-RPC compatibility with Ethereum through its default RPC endpoints.
This allows developers to use familiar Ethereum tools and libraries to interact with XFT nodes for tasks such as account management, transaction submission, smart contract deployment, and event monitoring.

For more information, please refer to the [official Ethereum JSON-RPC API documentation](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction).

## Blocks

XFT uses [Frontier](https://github.com/moonbeam-foundation/frontier/) to provide Ethereum-compatible blocks.
Each Ethereum block is derived from the state of the Substrate chain when the Substrate block is finalized.
Ethereum block metadata is stored on-chain as part of the final Substrate block data.

* The block number in Ethereum matches the block number of the corresponding Substrate block.
* The parent block hash is the Ethereum block hash of the previous Substrate block. In case of a Substrate chain fork, Ethereum blocks will fork alongside it.

## Precompiles

XFT supports all native Ethereum precompiles, including `DELEGATECALL`.
Additionally, it includes the following precompiles:

* **ERC-20 Precompile**: This enables transfers of the native CFG token through an ERC-20 compatible interface.
* **Custom Precompile**: XFT has an Axelar gateway precompile, which handles incoming Liquidity Pools messages from the Axelar network.

By supporting these precompiles, XFT ensures efficient execution of smart contracts and compatibility with Ethereum's cryptographic functions.