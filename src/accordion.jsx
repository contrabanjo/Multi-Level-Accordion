import React, { useState } from "react";
import ReactDOM from "react-dom";
import InnerLevel from "./InnerLevel.jsx";

export default function Accordion() {
  const [openItem, setOpenItem] = useState(null);
  function onClick(e) {}
  return (
    <div id="accordion">
      <div id="OuterLevel">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="OuterLevelItem">
            <div
              className="label"
              onClick={() => {
                setOpenItem(i);
              }}
            >
              Round {i}
            </div>
            {i === openItem ? <InnerLevel /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
