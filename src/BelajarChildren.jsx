import React from "react";
import "./index.css";

const BelajarChildren = () => {
  return (
    <>
      <h2 className=" text-center text-4xl font-bold mt-10 ">Card Anak Baik</h2>
      <div className=" flex gap-5 ">
        <CardChildren title="Hello World">
          <p>Jadi anak yang sholeh yaa</p>
          <button className="bg-blue-500 p-2 rounded-md text-white">
            Klik disini untuk menjadi anak sholeh
          </button>
        </CardChildren>

        <CardChildren title="Different Card">
          <p>Jangan jadi anak nakal</p>
          <button className="bg-blue-500 p-2 rounded-md text-white">
            Klik disini untuk menjadi anak nakal
          </button>
        </CardChildren>
      </div>
    </>
  );
};

const CardChildren = ({ children, title }) => {
  return (
    <div className=" border-2 w-fit m-4 p-5 border-black ">
      <h2 className=" text-4xl my-4 ">{title}</h2>
      {children}
    </div>
  );
};

export default BelajarChildren;
