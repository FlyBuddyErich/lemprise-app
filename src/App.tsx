"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import CartPage from "./pages/CartPage"
import Footer from "./components/Footer"
import ScrollToTopButton from "./components/ScrollToTopButton"
import { Toaster } from "@/components/ui/sonner"
import { useEffect } from "react";

function AppContent() {
  const location = useLocation();


  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Lemprise";
        break;
      case "/shop":
        document.title = "Lemprise - Shop";
        break;
      case "/cart":
        document.title = "Lemprise - Cart";
        break;
      default:
        document.title = "Lemprise";
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen grainy">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="flex-1 py-8 pb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTopButton />
      <Toaster />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App