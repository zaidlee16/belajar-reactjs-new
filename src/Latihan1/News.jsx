import React from "react";
import Header from "./components/Header";
import Card from "./Card";

const News = () => {
  const dataNews = [
    {
      title: "Viral Video: Dancing Cat Takes Internet by Storm",
      date: "March 31 2024",
      content:
        "A video of a cat dancing to catchy tunes has gone viral, captivating audiences worldwide.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      category: "Viral",
      link: "#",
    },
    {
      title: "Unexpected Hero: Dog Saves Family from Fire",
      date: "March 30 2024",
      content:
        "A brave dog has been hailed as a hero after saving its family from a house fire.",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
      category: "Viral",
      link: "#",
    },
    {
      title: "Internet Challenge: Ice Bucket Challenge 2.0",
      date: "March 29 2024",
      content:
        "The Ice Bucket Challenge is back with a new twist, raising awareness and funds for ALS.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      category: "Viral",
      link: "#",
    },
    {
      title: "Inspirational Story: Teen Raises Funds for Animal Shelter",
      date: "April 28 2024",
      content:
        "A teenager has raised over $10,000 for a local animal shelter through an online campaign.",
      image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
      category: "Viral",
      link: "#",
    },
    {
      title: "Record-Breaking Feat: Man Juggles for 24 Hours",
      date: "April 27 2024",
      content:
        "A man has broken the world record by juggling non-stop for 24 hours.",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      category: "Viral",
      link: "#",
    },
    {
      title: "Touching Reunion: Lost Pet Returns Home After 5 Years",
      date: "April 26 2024",
      content:
        "A family has been reunited with their lost pet after five long years, thanks to social media.",
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      category: "Viral",
      link: "#",
    },
  ];

  return (
    <>
      <Header title="Latest News" subtitle="Covering March & April 2024" />

      <div className=" grid grid-cols-3 gap-5 px-10 py-5 max-lg:grid-cols-1 max-lg:px-3">
        {dataNews.map((news, index) => (
          <div key={index}>
            <Card
              title={news.title}
              date={news.date}
              content={news.content}
              image={news.image}
              category={news.category}
              link={news.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
