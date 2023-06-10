import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import "./index.css";
import "./carousel.css";
import { CarouselItem } from "./CarouselItem";

export const carouselItems = [
  {
    name: "Onchain home for Cosmonauts",
    text: "Side Is A Secure, Low-Cost, Developer-Friendly Cosmos SDK Based EVM Blockchain Built To Be An Open Ecosystem That Will Bring The Next Billion Users To Web3.",
    pic: "/image/1.png"
  },
  {
    name: "The best of Ethereum with interoperability of Cosmos",
    text: "Side Is The EVM Equivalent That Enables Developers To Deploy Their Solidity-Based Smart Contracts And Leverage The Scalability And Interoperability Of Cosmos, Ensuring Seamless Compatibility With Existing Code, Tools, And Infrastructure.",
    pic: "/image/2.png"
  },
  {
    name: "Developer-centric ecosystem with massive incentives",
    text: "An Ecosystem Built To Empower Innovation With Massive Incentives. Unleash Your Creativity And Thrive In A Seamless, Rewarding Blockchain Environment.",
    pic: "/image/3.png"
  },
  {
    name: "Unrivaled Transaction Handling and Scaling",
    text: "With Single Block Finality And Unrivaled Scalability, The Backbone Of SIDE Enables It To Effortlessly Handle The Transaction Demands Of Thousands Of Protocols And Millions Of Users.",
    pic: "/image/4.png"
  }
];

export function Carousel({ setSlide }: { setSlide: number }) {
  useEffect(() => {}, [setSlide]);

  return (
    <Box className="carouselContainer">
      <Box className="carouselContent">
        <Box className="keen-slider">
          <img
            src={carouselItems[setSlide].pic}
            alt=""
            className="carouselContentImg"
          />
        </Box>
      </Box>
    </Box>
  );
}
