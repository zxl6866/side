import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import "./index.css";
import "./carousel.css";
import { CarouselItem } from "./CarouselItem";

export const carouselItems = [
  {
    name: "",
    url: "",
    pic: "/image/1.png"
  },
  {
    name: "",
    url: "",
    pic: "/image/2.png"
  },
  {
    name: "",
    url: "",
    pic: "/image/3.png"
  },
  {
    name: "",
    url: "",
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
