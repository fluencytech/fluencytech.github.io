import React from 'react';
import { motion } from "framer-motion";


const Button = ( {styles} ) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    href="https://docs.google.com/forms/d/e/1FAIpQLScdHV5O3NrxgLdVMC3b7E8AT1kbzK3pujuj2t7wx--BAbOJgA/viewform?usp=sf_link"
    target="_blank"
    rel="noreferrer"
    type="button"
  >
    Pesquisa
  </motion.button>
);

export default Button;