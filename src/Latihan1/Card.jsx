import React from "react";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

const Card = ({ image, category, date, title, content, link }) => {
  return (
    <>
      <article className=" shadow-2xl p-6 rounded-md">
        <CardHeader image={image} category={category} />
        <CardBody date={date} title={title} content={content} link={link} />
      </article>
    </>
  );
};

export default Card;
