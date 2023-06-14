import React, { useEffect, useState } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { Button, Popover, Tooltip } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";
import bg from "../../assets/image/logo.png";

const explorerTooltip = () => {
  return (
    <Box className="explorerTooltip">
      <Box className="explorerTooltipList">
        <img src={bg} alt="" />
        <Box className="explorerTooltipListText">
          <h5>Explore Ecosystem</h5>
          <p>
            Explore the global network of dApps Access the asset powering the
            Injective
          </p>
        </Box>
      </Box>
      <Box className="explorerTooltipList">
        <img src={bg} alt="" />
        <Box className="explorerTooltipListText">
          <h5>Explore Ecosystem</h5>
          <p>
            Explore the global network of dApps Access the asset powering the
            Injective
          </p>
        </Box>
      </Box>
      <Box className="explorerTooltipList">
        <img src={bg} alt="" />
        <Box className="explorerTooltipListText">
          <h5>Explore Ecosystem</h5>
          <p>
            Explore the global network of dApps Access the asset powering the
            Injective
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
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
        scroll
          ? "headerContainer animated fadeInRight scroll"
          : "headerContainer animated fadeInRight"
      }
    >
      <Box className="headerContent">
        <Flex className="headerFlex">
          <Link to={"/"}>
            <Box className="headerLogo" />
          </Link>
          <Box className="headerLinkContainer">
            <Link
              to={"/"}
              className="headerLink button--nina button--text-thick button--text-upper button--size-s"
              data-text="Developers"
            >
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
              <span>s</span>
            </Link>
            <Link
              to={"/"}
              className="headerLink button--nina button--text-thick button--text-upper button--size-s"
              data-text="Individuals"
            >
              <span>I</span>
              <span>n</span>
              <span>d</span>
              <span>i</span>
              <span>v</span>
              <span>i</span>
              <span>d</span>
              <span>u</span>
              <span>a</span>
              <span>l</span>
              <span>s</span>
            </Link>
            <Link
              to={"/"}
              className="headerLink headerLink button--nina button--text-thick button--text-upper button--size-s"
              data-text="Community"
            >
              <span>C</span>
              <span>o</span>
              <span>m</span>
              <span>m</span>
              <span>u</span>
              <span>n</span>
              <span>i</span>
              <span>t</span>
              <span>v</span>
            </Link>
            <Link
              to={"/"}
              className="headerLink headerLink button--nina button--text-thick button--text-upper button--size-s"
              data-text="Explorer"
            >
              <Popover placement="bottom" content={explorerTooltip()}>
                Explorer
              </Popover>
            </Link>
            {/* <Link to={"/"} className="headerLink launchButton">
              Launch App
            </Link> */}

            <Link to={"/"} className="headerLink ">
              <span className="disc"></span>
            </Link>
            <Link to={"/"} className="headerLink ">
              <span className="tuite"></span>
            </Link>
            <Link to={"/"} className="headerLink github">
              <span className="github"></span>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
