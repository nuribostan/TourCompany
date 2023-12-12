import React from "react";

function Button({text}) {
  return (
    <div className="seeMore-button">
      <button className="button">{text}</button>
    </div>
  );
}

export default Button;
