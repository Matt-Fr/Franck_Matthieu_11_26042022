import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Slider from "../components/Slider";
import StarsRating from "../components/StarsRating";
import Collapse from "../components/Collapse";

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
    equipments,
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
          <div className="infoOwner-starsContainer">
            <StarsRating rating={rating}></StarsRating>
          </div>
        </div>
      </section>
      <section className="collapseContainerAcc">
        <div className="collapseContainerAcc-div">
          <Collapse
            title="Description"
            info={description}
            className="collapse-acc"
          />
        </div>
        <div className="collapseContainerAcc-div">
          <Collapse
            title="Équipements"
            className="collapse-acc"
            info={equipments.map((equipement) => {
              return <span>{equipement}</span>;
            })}
          />
        </div>
      </section>
    </>
  );
};

export default Accommodation;
