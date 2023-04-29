import React from "react";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import "./infobox.css";

export default function InfoBox({ title, description, year, setInfoBox }) {
  return (
    <motion.div
      className="infobox-container"
      initial={{ scale: 0, rotate: 40 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="infobox">
        <div className="infobox-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={() => setInfoBox(false)}>
            <AiFillCloseCircle />
          </button>
        </div>
        <div className="infobox-content">
          <p>{description}</p>
        </div>
        <div className="infobox-year">
          <p>{year}</p>
        </div>
      </div>
    </motion.div>
  );
}
