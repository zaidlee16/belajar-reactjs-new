import React from "react";

const Button = ({ link }) => {
  return (
    <div className=" mt-4">
      <a href={link} className=" bg-black text-white py-2 px-4 rounded-md ">
        Find Out More
      </a>
    </div>
  );
};

export default Button;
