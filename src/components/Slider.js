import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Slider = ({ pictures }) => {
  const [images, setImages] = useState(pictures);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  return (
    <div className="imgContainer">
      {images.map((picture, picindex) => {
        let position = "imgContainer-nextSlide";
        if (picindex === index) {
          position = "imgContainer-activeSlide";
        }
        if (
          picindex === index - 1 ||
          (index === 0 && picindex === images.length - 1)
        ) {
          position = "imgContainer-prevSlide";
        }
        if (images.length === 1) {
          position = "imgContainer-activeSlideSolo";
        }
        return <img src={picture} alt="" className={position} />;
      })}
      <button
        className="prev"
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        <FiChevronLeft />
      </button>
      <button
        className="next"
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        <FiChevronRight />
      </button>
      <span className="indexImg">{`${index + 1} / ${images.length}`}</span>
    </div>
  );
};

export default Slider;
