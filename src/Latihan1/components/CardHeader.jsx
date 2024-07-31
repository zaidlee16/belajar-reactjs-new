import React from "react";

const CardHeader = ({ image, category }) => {
  return (
    <header>
      <h4 className=" text-center mb-2 px-3 py-1 text-sm bg-gray-700 text-white rounded-full w-fit ">
        {category}
      </h4>
      <img src={image} alt="news" className=" w-full h-48 object-cover" />
    </header>
  );
};

export default CardHeader;
