import React from "react";
import { Box, Divider, Flex, Spacer } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";

export function Subscription() {
  return (
    <Box className="subscriptionContainer">
      {/* <Divider opacity="0.1" /> */}
      <Box className="footerTop">
        <h5>STAY UP TO DATE</h5>
        <ul>
          <li style={{ marginRight: "26px" }}>Explorer</li>
          <li> Community</li>
          <li> Individuals</li>
          <li> Developers</li>
        </ul>
      </Box>
      <Flex className="footerFlex">
        <Box className="footerText">
          <Box className="h3">Sign up for newsletter</Box>
          <input type="text" placeholder="Enter your email" className="input" />
          <Box className="arrowRight"></Box>
          <Box className="footerWangzhi">
            © 2022 Side Labs All Rights Reserved
          </Box>
        </Box>
        <Spacer className="footerSpacer" />
        <Box>
          <Box marginBottom="10px">
            <Box
              className="footerInstagram footerIcon"
              onClick={() => window.open("https://www.instagram.com/")}
            />
            <Box
              className="footerMedium footerIcon"
              onClick={() => window.open("https://www.instagram.com/")}
            />
            <Box
              className="footerTwitter footerIcon"
              onClick={() => window.open("https://twitter.com")}
            />
            <Box
              className="footerM footerIcon"
              onClick={() => window.open("https://www.youtube.com/")}
            />
            <Box
              className="footerGithub footerIcon"
              onClick={() => window.open("https://www.youtube.com/")}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
