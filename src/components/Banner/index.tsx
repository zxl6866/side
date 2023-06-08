import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./index.css";

export function Banner() {
  return (
    <Box className="bannerContainer animated fadeInLeft">
      <Box className="bannerBg1" />
      {/* <Box className="bannerBg2" /> */}

      <Box className="bannerContent">
        <Box className="bannerSlogan">Discover the </Box>
        <Box className="bannerSlogan">Unexplored Sidee</Box>
        <Box className="bannerText">
          Enter the Web of Endless Opportunities and Unleash Limitless Potential
        </Box>
        <Box className="bannerButton">Sign up</Box>
        <Box className="bannerButtomText bannerEmbraceText">
          Embrace SIDE blockchain and
          <Box className="species" />
        </Box>
        <Box className="bannerButtomText">
          Transform possibilities into reality
        </Box>
      </Box>
    </Box>
  );
}
