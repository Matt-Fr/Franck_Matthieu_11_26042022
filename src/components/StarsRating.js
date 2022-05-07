import React from "react";
import { IoStarSharp } from "react-icons/io5";

const StarsRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {stars.map((star, indexStar) => {
        if (indexStar <= rating - 1) {
          return <IoStarSharp className="starFilled" />;
        } else return <IoStarSharp className="starEmpty" />;
      })}
    </>
  );
};

export default StarsRating;
