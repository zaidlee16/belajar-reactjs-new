import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FiturableProductTable from "./FiturableProductTable.jsx";
import CardNews from "./CardNews.jsx";
import BelajarChildren from "./BelajarChildren.jsx";
import News from "./Latihan1/News.jsx";
import BelajarUseState from "./BelajarUseState.jsx";
import GetApi from "./GetApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <News />
    {/* <BelajarUseState /> */}
    {/* <GetApi /> */}
  </React.StrictMode>
);
