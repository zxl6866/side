import React, { MutableRefObject, useEffect, useState } from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";

export function PortfolioCompanies() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const targetHeight = 3500;

      if (scrollHeight >= targetHeight) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box className="portfolioContainer">
      <Box className="portfolioInnerContainer">
        <Box className="portfolioInnerContainerBg"></Box>
        <Box className="portfolioInnerContainerR">
          <Box
            className={
              animate
                ? "portfolioInnerContainerText animated zoomInLeft"
                : "portfolioInnerContainerText"
            }
          >
            The Web3 technology company <br /> born in <span>Cosmos</span>.
          </Box>
          {/* <Box className="portfolioInnerContainerButton"> Side Labs</Box> */}
          <Box
            className={animate ? "arrows animated zoomInLeft" : "arrows"}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
