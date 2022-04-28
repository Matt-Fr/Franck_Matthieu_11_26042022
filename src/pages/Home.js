import React from "react";
import backgroundImg from "../background.png";
import Thumbnail from "../components/Thumbnail";
import data from "../data.json";

const Home = () => {
  return (
    <>
      <section className="homeHeader">
        <img src={backgroundImg} alt="" className="homeHeader-img" />
        <h1 className="homeHeader-title">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="thumbContainer">
        {data.map((accommodation) => {
          const { id, title, cover } = accommodation;

          return <Thumbnail key={id} title={title} cover={cover}></Thumbnail>;
        })}
      </section>
    </>
  );
};

export default Home;
