import React from "react";

const Card = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.description}</h2>
      <button>{props.button}</button>
    </div>
  );
};

export default Card;
