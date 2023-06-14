import React, { MutableRefObject, useEffect, useState } from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import bg1 from "../../assets/image/Interchain/1.png";
import bg2 from "../../assets/image/Interchain/2.png";
import bg3 from "../../assets/image/Interchain/3.png";

import "./index.css";

export function Interchain() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY; // 获取当前滚动位置
      const targetHeight = 2300; // 指定触发动画的滚动高度

      if (scrollHeight >= targetHeight) {
        setAnimate(true); // 设置状态来触发动画
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 空依赖数组确保只注册一次滚动事件

  return (
    <Box className="InterchainContainer">
      <Box className="InterchainContainerBox">
        <Box className="tltie">Interchain Technologies</Box>

        <Box
          className={
            animate
              ? "InterchainContainerLR animated rollIn"
              : "InterchainContainerLR"
          }
        >
          <Box className="InterchainContainerL">
            <h5 className="InterchainContainerLRTltie">
              Interchain Open Market
            </h5>
            <p className="InterchainContainerLRP">
              The Interchain Atomic Swap (IAS) protocol is empowering an
              omnichain asset open market where cross-chain assets are traded
              peer-to-peer without the need to bridge.
            </p>
            <Box className="InterchainContainerButton">Read More {">"}</Box>
          </Box>
          <Box className="InterchainContainerR" style={{ textAlign: "right" }}>
            <img
              className="InterchainContainerLRPImg"
              style={{ margin: "-100px 0 0 70px" }}
              src={bg2}
            ></img>
          </Box>
        </Box>

        <Box
          className={
            animate
              ? "InterchainContainerLR animated rollIn"
              : "InterchainContainerLR"
          }
        >
          <Box className="InterchainContainerL">
            <img
              className="InterchainContainerLRPImg"
              style={{ margin: "-130px 0 0 -70px" }}
              src={bg1}
            ></img>
          </Box>
          <Box className="InterchainContainerR">
            <h5 className="InterchainContainerLRTltie">Builders' Mining</h5>
            <p className="InterchainContainerLRP">
              Result-Driven Adopt-To-Earn Mechanism Built For Side Blockchain To
              Align Ecosystem Developers Interests With Network Growth.
            </p>
            <Box className="InterchainContainerButton">Read More {">"}</Box>
          </Box>
        </Box>

        <Box
          className={
            animate
              ? "InterchainContainerLR animated rollIn"
              : "InterchainContainerLR"
          }
        >
          <Box className="InterchainContainerL">
            <h5 className="InterchainContainerLRTltie">
              Mesh Liquidity Network
            </h5>
            <p className="InterchainContainerLRP">
              Utilized by Side’s novel inter-blockchain AMM-based swap protocol,
              a cross-chain liquidity network is created in a distributed,
              bridgeless and interconnected manner.
            </p>
            <Box className="InterchainContainerButton">Read More {">"}</Box>
          </Box>
          <Box className="InterchainContainerR" style={{ textAlign: "right" }}>
            <img
              className="InterchainContainerLRPImg"
              style={{ margin: "-100px 0 0 70px" }}
              src={bg3}
            ></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
