import React from "react";
import "./SongTemplate.css";
import { albums_img } from "../ImageConstants/image_constants";

const Article = ({ song }) => {
  const albumImageKey = song.album.toLowerCase().replace(/\s+/g, "_");
  const albumImage = albums_img[albumImageKey];

  return (
    <article className="article" key={song.id}>
      <p>Title: {song.title}</p>
      <img src={albumImage} alt="" className="article_img" />
      <p>Duration: {song.duration}</p>
      <p>Author: {song.author}</p>
    </article>
  );
};

export default Article;
