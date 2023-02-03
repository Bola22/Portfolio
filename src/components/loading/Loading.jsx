import React from "react";
import logo from "../../images/logo.png";
import { motion } from "framer-motion";
import "./loading.scss";

function Loading() {
  return (
    <div className="loading">
      <motion.div
        className="logo"
        animate={{
          scale: [1, 2, 2, 1, 2, 1, 0],
          // rotate: [0, 0, 270, 0, ,270, 0],
          // borderRadius: ["20%", "20%", "50%", "50%", "20%", "50%"],
        }}
      >B</motion.div>
    </div>
  );
}

export default Loading;
