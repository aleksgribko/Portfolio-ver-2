import React, { useEffect } from "react";
import "../sass/overlap.scss";

export default function Overlap(props) {
  useEffect(() => {
    let overlapElement = document.getElementById("overlap-window");
    let overlapTextElement = document.getElementById("overlap-text");

    if (overlapElement && overlapElement.classList) {
      overlapElement.classList.add("overlapFade");
      overlapTextElement.classList.add("overlapFade");
    }

    setTimeout(() => {
      overlapElement.classList.add("dont-display");
    }, 3000);
  }, []);

  return (
    <div className="overlapRoot" id="overlap-window">
      <div className="hello-text" id="overlap-text">
        Hello
      </div>
    </div>
  );
}
