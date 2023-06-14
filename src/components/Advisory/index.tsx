import React from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";
import bg1 from "../../assets/image/advisory/1.png";
import bg2 from "../../assets/image/advisory/2.png";
import bg3 from "../../assets/image/advisory/3.png";
import arrowWhite from "../../assets/image/advisory/arrow.png";
export function Advisory() {
  return (
    <Box className="advisoryContainer animated zoomInLeft">
      <Box className="advisoryTitle">SIDE Blockchain </Box>
      {/* <Box className="advisoryText" marginBottom={40}>
      </Box> */}
      <ul className="advisoryUl">
        <li>
          <img className="bg" src={bg1} alt="" />
          <h5>Tendermint Core</h5>
          <p>
            Best-in-class BFT consensus  engine that tolerates up to ⅓ of
            machines failing arbitrarily
          </p>
          <div className="arrow"></div>
        </li>
        <li>
          <img
            className="bg"
            style={{ marginLeft: "-20px" }}
            src={bg2}
            alt=""
          />
          <h5>IBC Protocol</h5>
          <p>
            Communicating protocol for relaying arbitrary messages between
            blockchains
          </p>
          <div className="arrow"></div>
        </li>
        <li>
          <img className="bg" src={bg3} alt="" />
          <h5>Cosmos SDK</h5>
          <p>
            Side Hub is a highly secure and scalable blockchain that is built
            using Cosmos SDK
          </p>
          <div className="arrow"></div>
        </li>
      </ul>
    </Box>
  );
}
