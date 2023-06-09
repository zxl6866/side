import React from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { debounce } from "lodash";
import "./index.css";
import { Carousel, carouselItems } from "./carousel";

export function ResearchReport() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handleWheel = debounce(event => {
    event.preventDefault(); // 取消默认滚轮事件

    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      setCurrentSlide(prevSlide => (prevSlide + 1) % 4);
    }
  }, 200);

  return (
    <Box className="researchContainer">
      <Box className="researchContent">
        <Box className="moon"></Box>

        <Box className="researchContentBox">
          <Box position="relative" className="researchContentBoxHs">
            <Box className="researchSlideStartIndexer" />
            <Box
              className={"researchSlideCurrentIndexer"}
              style={{
                top: `${(currentSlide / (carouselItems.length - 1)) * 82}%`
              }}
            />
            <Divider orientation="vertical" />
          </Box>
        </Box>

        <Box className="researchContentSildeBox">
          <Box className="researchContentSildeBoxW">
            <Box className="researchContentClick">
              <ul className="researUl">
                <li
                  onClick={() => {
                    setCurrentSlide(0);
                  }}
                >
                  <h5>Onchain home for Cosmonauts</h5>
                  <p>
                    Side is a secure, low-cost, developer-friendly Cosmos SDK
                    based EVM blockchain built to be an open ecosystem that will
                    bring the next billion users to web3.
                  </p>
                </li>
                <li
                  onClick={() => {
                    setCurrentSlide(1);
                  }}
                >
                  <h5>The best of Ethereum with interoperability of Cosmos</h5>
                  <p>
                    Side is the EVM equivalent that enables developers to deploy
                    their Solidity-based smart contracts and leverage the
                    scalability and interoperability of Cosmos, ensuring
                    seamless compatibility with existing code, tools, and
                    infrastructure.
                  </p>
                </li>
                <li
                  onClick={() => {
                    setCurrentSlide(2);
                  }}
                >
                  <h5>Developer-centric ecosystem with massive incentives</h5>
                  <p>
                    an ecosystem built to empower innovation with massive
                    incentives. Unleash your creativity and thrive in a
                    seamless, rewarding blockchain environment.
                  </p>
                </li>
                <li
                  onClick={() => {
                    setCurrentSlide(3);
                  }}
                >
                  <h5>Unrivaled Transaction Handling and Scaling</h5>
                  <p>
                    With single block finality and unrivaled scalability, the
                    backbone of SIDE enables it to effortlessly handle the
                    transaction demands of thousands of protocols and millions
                    of users.
                  </p>
                </li>
              </ul>
            </Box>
            <Box className="researchContentImg">
              <Carousel setSlide={currentSlide} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
