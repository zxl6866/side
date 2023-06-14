import React, { MutableRefObject, useEffect, useState } from "react";
import Typed from "react-typed";
import { Box } from "@chakra-ui/react";
import "./index.css";

export function PortfolioCompanies() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const targetHeight = 3800;

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
          {/* animated zoomInLeft */}
          <Box
            className={
              animate
                ? "portfolioInnerContainerText"
                : "portfolioInnerContainerText"
            }
          >
            The Web3 technology company <br /> born in{" "}
            {animate ? (
              <Typed strings={["Cosmos"]} typeSpeed={130} showCursor={false} />
            ) : null}
          </Box>
          {/* <Box className="portfolioInnerContainerButton"> Side Labs</Box> */}
          <Box className={animate ? "arrows" : "arrows"}></Box>
        </Box>
      </Box>
    </Box>
  );
}
