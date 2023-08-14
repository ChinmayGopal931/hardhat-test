const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Cert", function () {
  let cert;
  const srcChainId = 1;
  const dstChainId = 2;

  let srcEndpoint,
    dstEndpoint,
    proxyOFT,
    dstOFT,
    srcStaking,
    dstStaking,
    dstPath,
    srcPath,
    dfx;
  let token, proxyOFT2;

  let owner, alice, bob, carol;
  let dstStakingAddressBytes32, srcStakingAddressBytes32;

  before(async function () {
    const LZEndpointMock = await ethers.getContractFactory("LZEndpointMock");
    const ProxyOFT = await ethers.getContractFactory("ProxyOFTV2");
    const MockToken = await ethers.getContractFactory("MockToken");
    const OFT = await ethers.getContractFactory("OFTV2");
    const OFTStakingMock = await ethers.getContractFactory("OFTStakingMockV2");
    const DFX = "0x888888435FDe8e7d4c54cAb67f206e4199454c60";
    const DFX_WHALE = "0x2089fBc69710777e684791A320b054215985CC98";

    dfx = await ethers.getContractAt("IERC20", DFX);
    // console.log("bfore deploy");

    srcEndpoint = await LZEndpointMock.deploy(srcChainId);
    dstEndpoint = await LZEndpointMock.deploy(dstChainId);
    token = await MockToken.deploy("Mock", "MOCK");

    //console.log(dfx, "%%%%%%%%%%%%%%%%%%%%%", token);

    let test = await token.callStatic.decimals();
    console.log("decimals test ", test);

    proxyOFT = await ProxyOFT.deploy(token.address, 6, srcEndpoint.address);
    proxyOFT2 = await ProxyOFT.deploy(dfx.address, 18, srcEndpoint.address);

    // dstOFT = await OFT.deploy("OFT", "OFT", 6, dstEndpoint.address);

    // //proxyOFT2 = await ProxyOFT.deploy(dfx.address, 18, srcEndpoint.address);

    // console.log("after deploy");
    // dstOFT = await OFT.deploy("OFT", "OFT", 6, dstEndpoint.address);

    // console.log("ww");
    // srcStaking = await OFTStakingMock.deploy(proxyOFT.address);
    // dstStaking = await OFTStakingMock.deploy(dstOFT.address);

    // // internal bookkeeping for endpoints (not part of a real deploy, just for this test)
    // srcEndpoint.setDestLzEndpoint(dstOFT.address, dstEndpoint.address);
    // dstEndpoint.setDestLzEndpoint(proxyOFT.address, srcEndpoint.address);

    // // set each contracts source address so it can send to each other
    // dstPath = ethers.utils.solidityPack(
    //   ["address", "address"],
    //   [dstOFT.address, proxyOFT.address]
    // );
    // srcPath = ethers.utils.solidityPack(
    //   ["address", "address"],
    //   [proxyOFT.address, dstOFT.address]
    // );
    // await proxyOFT.setTrustedRemote(dstChainId, dstPath); // for A, set B
    // await dstOFT.setTrustedRemote(srcChainId, srcPath); // for B, set A

    // // set each contracts source address so it can send to each other
    // dstStakingAddressBytes32 = ethers.utils.defaultAbiCoder.encode(
    //   ["address"],
    //   [dstStaking.address]
    // );
    // srcStakingAddressBytes32 = ethers.utils.defaultAbiCoder.encode(
    //   ["address"],
    //   [srcStaking.address]
    // );
    // await srcStaking.setRemoteStakingContract(
    //   dstChainId,
    //   dstStakingAddressBytes32
    // );
    // await dstStaking.setRemoteStakingContract(
    //   srcChainId,
    //   srcStakingAddressBytes32
    // );

    //set destination min gas
    // await proxyOFT.setMinDstGas(
    //   dstChainId,
    //   parseInt(await proxyOFT.PT_SEND()),
    //   225000
    // );
    // await proxyOFT.setUseCustomAdapterParams(true);

    // owner = (await ethers.getSigners())[0];
    // let account = ethers.getSigners();
    // await hre.provider.request({
    //   method: "hardhat_impersonateAccount",
    //   params: [DFX_WHALE],
    // });
    // alice = await ethers.getSigner(DFX_WHALE);
    // console.log(alice, owner);

    // bob = (await ethers.getSigners())[2];
    // carol = (await ethers.getSigners())[3];
  });
  it("deposit on dst chain", async function () {
    console.log("ee");
  });
});
