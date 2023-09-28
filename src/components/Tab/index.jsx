import React from "react";
import "./style.css";

const Tab = (onClick) => {
  return (
    <div className="tab-todos">
      <nav className="nav">
        <button className="nav-link active" aria-current="page" onClick={onClick} >
          ALL
        </button>
        <button className="nav-link" onClick={onClick}>
          ACTIVE
        </button>
        <button className="nav-link" onClick={onClick}>
          COMPLETE
        </button>
      </nav>
    </div>
  );
};

export default Tab;
