import React from "react";
import {
  Brightness7,
  Brightness3
} from '@mui/icons-material';
import useHeaderHook from "./headerHook";

const LightDarkModeToggle = () => {
  const {
    lightMode,
    toggleLightMode
  } = useHeaderHook();

  const renderLightDarkModeIcons = () => {
    if (lightMode) {
      return  (
        <button 
          className="light-mode-icon-wrapper"
          onClick={toggleLightMode}
        >
          <Brightness7 />
        </button>
      );
    }
    else {
      return (
        <button 
          className="dark-mode-icon-wrapper"
          onClick={toggleLightMode}
        >
          <Brightness3 />
        </button>
      );
    };
  };
  return (
    <LightDarkModeToggle>
      <div className="light-dark-mode-toggle">
        {renderLightDarkModeIcons}
      </div>
    </LightDarkModeToggle>
  )
};

export default LightDarkModeToggle;