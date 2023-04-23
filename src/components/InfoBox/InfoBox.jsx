import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./infobox.css";

export default function InfoBox({ title, description, setInfoBox }) {
  return (
    <div className="infobox-container">
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
      </div>
    </div>
  );
}
