import { useEffect, useState } from "react";

/**
 * Hook to update the Window Dimensions
 * Documentation: https://usehooks.com/useWindowSize/
 */
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();
  }, []);

  const updateWindowDimensions = () => {
    setWindowDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  return windowDimensions;
};
