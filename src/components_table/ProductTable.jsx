import React from "react";
import ProductColumnTable from "./ProductColumnTable";
import ProductRowTable from "./ProductRowTable";
import "./styles.css";

const ProductTable = () => {
  return (
    <div>
      <table>
        <ProductColumnTable />
        <ProductRowTable />
      </table>
    </div>
  );
};

export default ProductTable;
