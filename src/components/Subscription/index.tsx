import React from "react";
import { Box, Divider, Flex, Spacer } from "@chakra-ui/react";
import { message } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";

export function Subscription() {
  // const handleFormSubmit = (event: {
  //   preventDefault: () => void;
  //   target: { elements: { email: { value: string } } };
  // }) => {
  //   event.preventDefault(); // 阻止表单默认提交行为

  //   // 获取 Email 字段的值
  //   const email = event.target.elements.email.value;

  //   // 执行表单提交的逻辑
  //   // 可以在这里发送表单数据到服务器或执行其他操作

  //   // 清空 Email 字段的值
  //   event.target.elements.email.value = "";
  // };

  return (
    <Box className="subscriptionContainer">
      {/* <Divider opacity="0.1" /> */}
      <Box className="footerTop">
        <h5>STAY UP TO DATE</h5>
        {/* <ul>
          <li style={{ marginRight: "26px" }}>Explorer</li>
          <li> Community</li>
          <li> Individuals</li>
          <li> Developers</li>
        </ul> */}
      </Box>
      <Flex className="footerFlex">
        <Box className="footerText">
          <Box className="h3">Sign up for newsletter</Box>
          <form action="https://submit-form.com/bvras8Ee">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input"
              required
            />
            <button
              type="submit"
              className="Send"
              // onClick={() => {
              //   message.success("Submit successfully");
              // }}
            >
              {/* Send */}
            </button>
          </form>
          {/* <input type="text" placeholder="Enter your email" className="input" /> */}
          <Box className="arrowRight"></Box>
        </Box>
        <Spacer className="footerSpacer" />
        <Box>
          <Box marginBottom="10px">
            <Box
              className="footerInstagram footerIcon"
              onClick={() =>
                window.open("https://www.instagram.com/", "_blank")
              }
            />
            <Box
              className="footerMedium footerIcon"
              onClick={() =>
                window.open("https://discord.com/invite/GN99earcFR")
              }
            />
            <Box
              className="footerTwitter footerIcon"
              onClick={() => window.open("https://twitter.com/SideProtocol")}
            />
            <Box
              className="footerM footerIcon"
              onClick={() => window.open("https://www.youtube.com/")}
            />
            <Box
              className="footerGithub footerIcon"
              onClick={() => window.open("https://github.com/sideprotocol")}
            />
          </Box>
          <Box
            className="footerWangzhi"
            onClick={() => {
              window.open("https://medium.com/@SideProtocol", "_blank");
            }}
          >
            © 2022 Side Labs All Rights Reserved
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
