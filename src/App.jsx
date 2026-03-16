import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: "circOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        
        <main>
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;