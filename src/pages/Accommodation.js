import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

import Slider from "../components/Slider";

const Accommodation = () => {
  const { accommodationId } = useParams();
  const accommodation = data.find(
    (singleAcc) => singleAcc.id === accommodationId
  );
  const {
    title,
    description,
    pictures,
    host: { name, picture },
    rating,
    location,
    tags,
  } = accommodation;

  return (
    <>
      <Slider pictures={pictures}></Slider>
      <section className="infoAcc">
        <div className="infoAcc-container">
          <h2 className="infoAcc-container-title">{title}</h2>
          <span className="infoAcc-container-location">{location}</span>
          <div className="infoAcc-container-tagContainer">
            {tags.map((tag) => {
              return (
                <span className="infoAcc-container-tagContainer-tag">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className="infoOwner">
          <div className="infoOwner-container">
            <span className="infoOwner-container-name">{name}</span>
            <img
              src={picture}
              alt={`photo de profil de ${name}`}
              className="infoOwner-container-img"
            />
          </div>
          <div>Des étoiles pour le rating</div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;
