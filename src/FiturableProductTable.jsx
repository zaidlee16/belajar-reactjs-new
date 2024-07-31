import React from "react";
import SearchBar from "./components_table/SearchBar";
import ProductTable from "./components_table/ProductTable";

const FiturableProductTable = () => {
  return (
    <>
      <div className="container">
        <SearchBar label={"List Product Handphone Gaming"} />
        <ProductTable />
      </div>
    </>
  );
};

export default FiturableProductTable;
