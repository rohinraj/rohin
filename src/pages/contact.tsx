import { motion } from "framer-motion";
import { NextPage } from "next";
import ContactSection from "../components/ContactSection";

const Contact: NextPage = () => {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-10%", opacity: 0 }}
      className="pageWrap"
    >
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
