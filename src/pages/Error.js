import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="errorSection">
      <span className="errorSection-num">404</span>
      <p className="errorSection-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorSection-link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
};

export default Error;
