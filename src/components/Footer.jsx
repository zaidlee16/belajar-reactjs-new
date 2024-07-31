import React from "react";

const Footer = ({ title, description, button }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <button>{button}</button>
    </div>
  );
};

export default Footer;
