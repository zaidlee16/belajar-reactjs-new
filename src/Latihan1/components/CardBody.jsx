import React from "react";
import Button from "./Button";

const CardBody = ({ date, title, content, link }) => {
  return (
    <div className=" mt-4 mb-2">
      <p className=" text-sm text-gray-500">{date}</p>
      <h2 className=" font-bold text-xl">{title}</h2>
      <p className=" mt-2">{content}</p>

      <Button link={link} />
    </div>
  );
};

export default CardBody;
