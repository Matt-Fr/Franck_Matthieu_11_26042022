import React, { useState } from "react";
import { ReactComponent as Chevron } from "../chevron.svg";

const Collapse = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="collapse">
      <header className="collapse-header">
        <h4 className="collapse-header-title">{title}</h4>
        <button
          className="collapse-header-btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          <Chevron className={!showInfo ? "chevron" : "chevronDown"} />
        </button>
      </header>
      {showInfo && <p className="collapse-info">{info}</p>}
    </article>
  );
};

export default Collapse;
