import React from "react";
import { Box, Divider, Flex, Tooltip } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";
import bg from "../../assets/image/logo.png";

const explorerTooltip = (data: any) => {
  return (
    <Box className="explorerTooltip">
      <Box className="explorerTooltipList">
        <img src={bg} alt="" />
        <Box className="explorerTooltipListText">
          <h5>Explore Ecosystem</h5>
          <p>
            Explore the global network of dApps Access the asset powering the
            Injective
          </p>
        </Box>
      </Box>
      <Box className="explorerTooltipList">
        <img src={bg} alt="" />
        <Box className="explorerTooltipListText">
          <h5>Explore Ecosystem</h5>
          <p>
            Explore the global network of dApps Access the asset powering the
            Injective
          </p>
        </Box>
      </Box>
      <Box className="explorerTooltipList">
        <img src={bg} alt="" />
        <Box className="explorerTooltipListText">
          <h5>Explore Ecosystem</h5>
          <p>
            Explore the global network of dApps Access the asset powering the
            Injective
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export function Header() {
  return (
    <Box className="headerContainer animated fadeInRight">
      <Box className="headerContent">
        <Flex className="headerFlex">
          <Link to={"/"}>
            <Box className="headerLogo" />
          </Link>
          <Box className="headerLinkContainer">
            <Link to={"/#research"} className="headerLink">
              Developers
            </Link>
            <Link to={"/#advisory"} className="headerLink">
              Individuals
            </Link>
            <Link to={"/#partner"} className="headerLink">
              Community
            </Link>
            <Link to={"/#meetus"} className="headerLink">
              <Tooltip hasArrow label={explorerTooltip(1)}>
                Explorer
              </Tooltip>
            </Link>
            <Link to={"/#meetus"} className="headerLink launchButton">
              Launch App
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
