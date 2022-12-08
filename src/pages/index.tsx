import { motion } from "framer-motion";
import { NextPage } from "next";
import HeroSection from "../components/HeroSection";

const HomePage: NextPage = () => {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-10%", opacity: 0 }}
      className="pageWrap"
    >
      <HeroSection />
    </motion.div>
  );
};

export default HomePage;
