// 引入ethers库
const { ethers } = require('hardhat')

// 定义一个异步函数main
async function main() {
    // 获取部署者的地址
    const [deployer] = await ethers.getSigners()
    // 打印部署者的地址
    console.log('打印部署者的地址:', deployer.address)
    // 获取Token合约的工厂
    const Token = await ethers.getContractFactory('Token')
    // 部署Token合约
    const token = await Token.deploy()
    // 等待合约部署完成
    await token.waitForDeployment()
    // 打印Token合约的地址
    console.log('打印Token合约的地址:', token.getAddress())
}
main()
