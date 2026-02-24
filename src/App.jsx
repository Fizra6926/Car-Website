import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Agence from "./Agence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import Navber from "./Components/Navigation/Navber";
import Fullscreennav from "./Components/Navigation/Fullscreennav";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";

const App = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  
  const [showPages, setShowPages] = useState(false); 
  const [isNavOpen, setIsNavOpen] = useState(false); // Menu control state

  // Function to open/close menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Jab bhi link click ho, menu band ho jaye
  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        onStart: () => {
          gsap.set(containerRef.current, { display: "flex" });
          setShowPages(false);
        },
        onComplete: () => {
          gsap.set(containerRef.current, { display: "none" });
          setShowPages(true);
        },
      });

      tl.fromTo(
        ".stair",
        { height: 0, y: "0%" },
        { height: "100%", duration: 0.8, stagger: 0.12, ease: "power2.out" }
      ).to(".stair", {
        y: "100%",
        duration: 0.8,
        stagger: { amount: -0.3 },
        ease: "power2.in",
      });
    },
    { scope: containerRef, dependencies: [location.pathname] }
  );

  return (
    <>
      {/* 1. Transition Loader */}
      <div
        ref={containerRef}
        className="loader fixed inset-0 z-[150] flex h-screen w-full pointer-events-none"
        style={{ display: "none" }}
      >
        <div className="h-full flex w-full">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="stair h-full w-1/5 bg-black"></div>
          ))}
        </div>
      </div>

      <div className="overflow-x-hidden min-h-screen bg-white">
        
        {/* 2. Navbar */}
        <Navber toggleNav={toggleNav} isNavOpen={isNavOpen} />

        {/* 3. Fullscreen Menu */}
        {isNavOpen && <Fullscreennav />}
        
        {/* 4. Main Pages (Yahan Routes ke andar sab pages add kar diye hain) */}
        <div className="relative z-10">
          {showPages && (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/agence" element={<Agence />} /> 
              <Route path="/projects" element={<Projects />} /> 
              {/* Contact aur Blog ko yahan add kiya hai */}
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/blog" element={<Blog />} /> 
            </Routes>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

