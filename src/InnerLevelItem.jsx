import React, { useState } from "react";

export default function InnerLevelItem() {
  const [open, setOpen] = useState(null);
  return (
    <div className="InnerLevelItem">
      <div
        className="label"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Top Level Text.
      </div>
      {open ? <div>Further Details</div> : null}
    </div>
  );
}
