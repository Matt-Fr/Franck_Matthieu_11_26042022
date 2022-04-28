import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const Accommodation = () => {
  const { accommodationId } = useParams();
  const accommodation = data.find(
    (singleAcc) => singleAcc.id === accommodationId
  );
  const { title } = accommodation;

  return <div>{title}</div>;
};

export default Accommodation;
