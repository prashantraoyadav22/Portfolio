import { useEffect, useState } from "react";
import App from "./App";
import Splash from "./components/Splash";

const Root = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 7500); // splash duration in ms

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <Splash /> : <App />;
};

export default Root;
