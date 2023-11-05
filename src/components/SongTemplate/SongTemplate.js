import React from "react";
import "./SongTemplate.css"

const Article = ({img, title, description }) => {
  return (
    <article className="article">
      <img src={img} alt="" className="article_img" />
      <h3 className="article_title">{title}</h3>
      <p className="article_description">{description}</p>
    </article>
  );
};

export default Article;