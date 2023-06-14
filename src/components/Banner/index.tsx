import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";

export function Banner() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber >= 10) {
          clearInterval(timer);
        }
        return prevNumber + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer); // 组件卸载时清除定时器
    };
  }, []);

  const renderTypedText = (
    condition: boolean,
    strings: string[],
    typeSpeed: number,
    className: string
  ): React.ReactNode => {
    return condition ? (
      <Box className={className}>
        <Typed strings={strings} typeSpeed={typeSpeed} showCursor={false} />
      </Box>
    ) : null;
  };

  return (
    <Box className="bannerContainer animated fadeInLeft">
      <Box className="bannerBg1" />

      <Box className="bannerContent">
        <Box className="bannerSlogan">
          <Typed strings={["Discover The"]} typeSpeed={70} showCursor={false} />
        </Box>

        {renderTypedText(number > 1, ["Unexplored Side"], 80, "bannerSlogan")}

        {renderTypedText(
          number > 3,
          [
            "Enter the Web of Endless Opportunities and Unleash Limitless Potential"
          ],
          40,
          "bannerText"
        )}
        {number > 7 ? (
          <>
            {/* <Box className="bannerButton">Coming Soon</Box> */}
            <Box
              className="button bannerButton  button--rayen button--border-thick button--text-thick animated rollIn"
              data-text="Coming Soon"
            >
              <span>Coming Soon</span>
            </Box>
            <Box className="joinCommunity animated rollIn">Join Community</Box>
            {/* <Box className="bannerButtomText bannerEmbraceText animated fadeInRight">
              Embrace SIDE blockchain and
              <Box className="species" />
            </Box>
            <Box className="bannerButtomText animated fadeInLeft">
              Transform possibilities into reality
            </Box> */}
          </>
        ) : null}
      </Box>
    </Box>
  );
}
