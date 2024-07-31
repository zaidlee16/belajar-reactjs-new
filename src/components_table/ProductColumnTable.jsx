import React from "react";
import "./styles.css";

const internalStyles = {
  th: {
    padding: "10px",
    textAlign: "left",
    color: "white",
  },
};

const ProductColumnTable = () => {
  return (
    <thead className="table-header">
      <tr>
        <th style={internalStyles.th}>Name</th>
        <th style={internalStyles.th}>Price</th>
      </tr>
    </thead>
  );
};

export default ProductColumnTable;
