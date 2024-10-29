require('@nomicfoundation/hardhat-toolbox')

// 公钥
// 0xa8D2C6Bb8567FE064059C7FE708D739c43Ba4028
// 私钥
// 0x32ffe114bd96e680ac4ea4f68a6f1b00b3df863522cf954a94798212b3738225
// 助记词
// cement bridge feed mountain brush craft swamp resist disorder spirit bitter element
// 推导路径
// m/44'/60'/0'/0/0
const PRIVATE_KEY = '0x32ffe114bd96e680ac4ea4f68a6f1b00b3df863522cf954a94798212b3738225'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: '0.8.27',
    defaultNetwork: 'hardhat', // 默认的虚拟网络
    networks: {
        hardhat: {},
        mumbai: {
            url: 'https://rpc-mumbai.maticvigil.com',
            accounts: {
                mnemonic: PRIVATE_KEY,
            },
            chainId: 80001,
        },
        goerli: {
            url: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        sepolia: {
            url: 'https://api.sepolia.dev',
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
    },
}
