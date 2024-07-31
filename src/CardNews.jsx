import React from "react";
import NewsList from "./components_news/NewsList";
import "./components_news/styles.css";

function App() {
  return (
    <div className="app">
      <h2 className="title font-serif font-bold text-2xl">
        Aming News | amingpetir16.com
      </h2>
      <NewsList />
    </div>
  );
}

export default App;
