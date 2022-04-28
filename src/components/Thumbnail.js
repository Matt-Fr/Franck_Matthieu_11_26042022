import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = ({ id, title, cover }) => {
  return (
    <Link to={`/rent/${id}`}>
      <article className="thumbnail">
        <img src={cover} alt={title} className="thumbnail-img" />
        <h3 className="thumbnail-title">{title}</h3>
      </article>
    </Link>
  );
};

export default Thumbnail;
