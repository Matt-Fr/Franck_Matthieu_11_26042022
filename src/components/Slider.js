import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slider = ({ pictures }) => {
  console.log(pictures);
  return (
    <div className="imgContainer">
      {pictures.map((picture) => {
        return <img src={picture} alt="" className="imgContainer-img" />;
      })}
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
