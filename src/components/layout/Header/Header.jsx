import React from "react";
import { HeaderSC } from "./HeaderSC";
import LightDarkModeToggle from "./LightDarkModeToggle";

const Header = () => {

  return (
    <HeaderSC>
      <div id="Header-Left"></div>
      <div id="Header-Center"></div>
      <div id="Header-Right">
          <LightDarkModeToggle />
      </div>
    </HeaderSC>
  );
};

export default Header;