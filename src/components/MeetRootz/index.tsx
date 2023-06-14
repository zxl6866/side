import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";

export function MeetRootz() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const targetHeight = 4400;

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
    <Box className={animate ? "meetRootzContainer" : "meetRootzContainer"}>
      <Box className="meetRootzBox">
        <Box className="meetRootzText">
          The future of <br /> interchain
          <span>
            {animate ? (
              <Typed
                strings={["interchain"]}
                typeSpeed={150}
                showCursor={false}
              />
            ) : null}
          </span>{" "}
          <br />
          interoperability
        </Box>
        <Box className="meetRootzBoxArrow">Read Docs</Box>
      </Box>
    </Box>
  );
}
