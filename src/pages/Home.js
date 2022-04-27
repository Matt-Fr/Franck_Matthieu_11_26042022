import React from "react";
import backgroundImg from "../background.png";
import data from "../data.json";
const url =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";

const Home = () => {
  console.log(data);

  return (
    <>
      <section className="homeHeader">
        <img src={backgroundImg} alt="" className="homeHeader-img" />
        <h1 className="homeHeader-title">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="thumbContainer"></section>
    </>
  );
};

export default Home;
