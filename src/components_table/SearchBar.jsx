import React from "react";
import "./styles.css";

const inlineStyles = {
  input: {
    padding: "5px",
    width: "200px",
    backgroundColor: "#555",
    color: "white",
    border: "1px solid #444",
  },
  label: {
    marginLeft: "5px",
    color: "white",
  },
};

const SearchBar = (props) => {
  return (
    <div className="search-bar_container">
      <input type="text" placeholder="Search" style={inlineStyles.input} />
      <div className="search-bar_in_stock_checkbox">
        <input type="checkbox" />
        <label style={inlineStyles.label}>{props.label}</label>
      </div>
    </div>
  );
};

export default SearchBar;
