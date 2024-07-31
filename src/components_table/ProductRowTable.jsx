import React from "react";
import "./styles.css";

const internalStyles = {
  td: {
    padding: "8px",
    color: "white",
  },
};

const ProductRowTable = () => {
  return (
    <tbody>
      <tr className="table-row">
        <td style={internalStyles.td}>Samsung S24 Ultra</td>
        <td style={internalStyles.td}>27.999.000</td>
      </tr>
      <tr className="table-row">
        <td style={internalStyles.td}>Iphone 15 Pro Max</td>
        <td style={internalStyles.td}>33.999.000</td>
      </tr>
      <tr className="table-row">
        <td style={internalStyles.td}>Nexian</td>
        <td style={internalStyles.td}>99.000</td>
      </tr>
    </tbody>
  );
};

export default ProductRowTable;
