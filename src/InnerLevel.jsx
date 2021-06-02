import React, { useState } from "react";
import InnerLevelItem from "./InnerLevelItem.jsx";

export default function InnerLevel() {
  const [openItem, setOpenItem] = useState(null);
  return (
    <div className="InnerLevel">
      {[1, 2, 3, 4, 5].map((i) => (
        <InnerLevelItem />
      ))}
    </div>
  );
}
