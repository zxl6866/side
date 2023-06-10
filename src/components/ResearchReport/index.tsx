import React, { useEffect, useRef, useState } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { debounce } from "lodash";
import "./index.css";
import { Carousel, carouselItems } from "./carousel";

export function ResearchReport() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startCarousel();

    return () => {
      stopCarousel();
    };
  }, []);

  const startCarousel = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % carouselItems.length);
    }, 5000);
  };

  const stopCarousel = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseEnter = () => {
    stopCarousel();
  };

  const handleMouseLeave = () => {
    startCarousel();
  };

  const handleItemClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Box className="researchContainer">
      <Box className="researchContent">
        <Box className="moon"></Box>

        <Box className="researchContentBox">
          <Box position="relative" className="researchContentBoxHs">
            <Box className="researchSlideStartIndexer" />
            <Box
              className="researchSlideCurrentIndexer"
              style={{
                top: `${(currentSlide / (carouselItems.length - 1)) * 82}%`
              }}
            />
            <Divider orientation="vertical" />
          </Box>
        </Box>

        <Box
          className="researchContentSildeBox"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Box className="researchContentSildeBoxW">
            <Box className="researchContentClick">
              <ul className="researUl">
                {carouselItems.map((item, index) => (
                  <li
                    key={index}
                    className={index === currentSlide ? "liActive" : ""}
                    onClick={() => handleItemClick(index)}
                  >
                    <h5>{item.name}</h5>
                    <p className={index === currentSlide ? "active" : ""}>
                      {item.text}
                    </p>
                  </li>
                ))}
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
