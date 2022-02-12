import React from "react";
import HomePageCarousel from "../../../components/HomePageCarousel/HomePageCarousel";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
// import About from "./About";
// import Reach from "./Reach";
// import Supporters from "./Supporters";

const landingpageAnimation = {
  initial: { y: "-100vh", opacity: 0, scale: 0.5 },
  animate: { y: 0, opacity: 0.98, scale: 1 },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 0.1, ease: "ease" },
  },
  transition: { duration: 0.5, ease: "anticipate" },
};
const HomePage = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header activePage="Home" />
      <AnimatePresence>
        <motion.div {...landingpageAnimation}>
          <HomePageCarousel />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default HomePage;
