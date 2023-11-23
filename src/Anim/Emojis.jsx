import React from "react";
import "./style.css";

const Emojis = () => {
  return (
    <div className="wrapper">
      <h1>Emoji Animation</h1>
      <div className="emoji-wrap">
        <p className="emoji"></p>
        <div className="l-r">
          <p className="emoji-eye-left"></p>
          <p className="emoji-eye-right"></p>
        </div>
        <p className="emoji-eye-nose"></p>
        <p className="emoji-eye-mouth"></p>
      </div>
    </div>
  );
};

export default Emojis;
