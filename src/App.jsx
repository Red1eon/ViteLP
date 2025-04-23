import React, { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './Components/LoadingScreen';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/section/Home';
import { HouseListing } from './Components/section/HouseListing';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoadingComplete = () => {
    setIsLoaded(true);
    navigate("/"); // Navigate to Home after loading
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {isLoaded && <Navbar />}
        <Routes location={location}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/listings"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HouseListing />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
