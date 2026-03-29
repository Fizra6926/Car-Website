



import { Routes, Route, useLocation, Navigate, Link } from "react-router-dom"; // Link import kiya hai
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Components & Pages imports
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Agence from "./Agence";
import Navber from "./Components/Navigation/Navber";
import Fullscreennav from "./Components/Navigation/Fullscreennav";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";

// Naye Pages jo banayenge (Unke imports)
import Login from "./Pages/Login"; 
import CreateCard from "./Pages/CreateCard"; 

const App = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  
  const [showPages, setShowPages] = useState(false); 
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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

  const isLoginPage = location.pathname === "/login";

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

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

      <div className="overflow-x-hidden min-h-screen bg-white relative">
        
        {/* 2. Navbar */}
        {!isLoginPage && <Navber toggleNav={toggleNav} isNavOpen={isNavOpen} />}

        {/* 3. Fullscreen Menu */}
        {!isLoginPage && isNavOpen && <Fullscreennav />}
        
        {/* 4. Main Pages / Routes */}
        <div className="relative z-10">
          {showPages && (
            <Routes location={location} key={location.pathname}>
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/agence" element={<ProtectedRoute><Agence /></ProtectedRoute>} /> 
              <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} /> 
              <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} /> 
              <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} /> 
              <Route path="/create-card" element={<ProtectedRoute><CreateCard /></ProtectedRoute>} /> 
            </Routes>
          )}
        </div>

        {/* ========================================================
            NAYA FEATURE: FLOATING BUTTON FOR CREATE CARD
            Ye button user ko hamesha screen ke bottom right pe dikhega 
            (sirf tab jab wo login hoga aur create-card page pe nahi hoga)
        ======================================================== */}
        {isAuthenticated && !isLoginPage && location.pathname !== "/create-card" && (
          <Link
            to="/create-card"
            className="fixed bottom-10 right-10 z-[100] bg-black text-white px-6 py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-bold"
          >
            <span className="text-xl leading-none">+</span> Create Card
          </Link>
        )}

      </div>
    </>
  );
};

export default App;