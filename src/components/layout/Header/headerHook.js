import { useState } from 'react';

const useHeaderHook = () => {
  const [lightMode, setLightMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleLightMode = () => {
    if (darkMode) {
      setLightMode(true);
      setDarkMode(false);
    }
    else {
      setDarkMode(true);
      setLightMode(false);
    };
  };
  return {
    lightMode,
    darkMode,
    toggleLightMode
  };
};

export default useHeaderHook;