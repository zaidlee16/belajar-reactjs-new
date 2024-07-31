import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className=" text-center my-4">
      <h1 className=" font-bold text-3xl font-mono">{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Header;
