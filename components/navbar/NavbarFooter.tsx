"use client";

import React from "react";
import stylesNavbar from "./navbar.module.css";
import { Flex, Icon, Portal } from "@chakra-ui/react";
import { FaHouse } from "react-icons/fa6";
import styles from "../../app/page.module.css";
function NavbarFooter() {
  return (
    <div className={stylesNavbar.navbarBlue}>
      <div className={stylesNavbar.stateprofile}>
        <div className={stylesNavbar.homeFrame}>
          <Icon as={FaHouse} color={"whiteAlpha.900"} />
        </div>
        <div className={stylesNavbar.homeFrame}></div>
        <div className={stylesNavbar.profileFrame}>
          <div className={stylesNavbar.profileFrameChild} />
        </div>
      </div>
    </div>
  );
}

export default NavbarFooter;
