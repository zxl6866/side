import React from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";

export function PortfolioCompanies() {
  return (
    <Box className="portfolioContainer">
      <Box className="portfolioInnerContainer">
        <Box className="portfolioInnerContainerBg"></Box>
        <Box className="portfolioInnerContainerR">
          <Box className="portfolioInnerContainerText">
            The Web3 technology company <br /> born in Cosmos.
          </Box>
          <Box className="portfolioInnerContainerButton"> Side Labs</Box>
        </Box>
      </Box>
    </Box>
  );
}
