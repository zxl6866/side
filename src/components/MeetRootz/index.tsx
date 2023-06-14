import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";

export function MeetRootz() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const targetHeight = 4200;

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
    <Box
      className={
        animate
          ? "meetRootzContainer animated zoomInLeft"
          : "meetRootzContainer"
      }
    >
      <Box className="meetRootzBox">
        <Box className="meetRootzText">
          The future of <br /> <span>interchain</span> <br />
          interoperability
        </Box>
        <Box className="meetRootzBoxArrow">Read Docs</Box>
      </Box>
    </Box>
  );
}
