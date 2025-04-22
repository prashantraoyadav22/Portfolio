import { useLocation } from 'react-router-dom';
import Splash from './components/Splash';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Always show splash on page load
    setShowSplash(true);
    const timer = setTimeout(() => setShowSplash(false), 7500);
    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          {/* 👇 Navbar always on top, fixed */}
          <Navbar />

          {/* 👇 Routes render below navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;

