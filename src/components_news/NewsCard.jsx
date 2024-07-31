import React from "react";
import "./styles.css";

function NewsCard({ title, description, link, imageUrl }) {
  return (
    <div className="news-card" style={{ padding: "20px" }}>
      <img src={imageUrl} alt={title} className="news-card_image" />
      <div className="news-card_content font-serif">
        <h2 className="news-card_title font-semibold">{title}</h2>
        <p className="news-card_description">{description}</p>
        <a href={link} className="news-card_link">
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
