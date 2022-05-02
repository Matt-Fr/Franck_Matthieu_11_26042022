import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slider = () => {
  return (
    <div className="imgContainer">
      <button className="prev">
        <FiChevronLeft />
      </button>
      <button className="next">
        <FiChevronRight />
      </button>
    </div>
  );
};

export default slider;
