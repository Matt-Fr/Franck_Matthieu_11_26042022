import React from "react";

const Thumbnail = ({ id, title, cover }) => {
  return (
    <article className="thumbnail">
      <img src={cover} alt={title} className="thumbnail-img" />
      <h3 className="thumbnail-title">{title}</h3>
    </article>
  );
};

export default Thumbnail;
