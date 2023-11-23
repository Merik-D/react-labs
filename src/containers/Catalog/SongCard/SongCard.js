import { Link } from "react-router-dom";
import { albums_img } from "../../../components/ImageConstants/image_constants";
import "./SongCard.css";

const SongCard = ({ song }) => {
  const albumImageKey = song.album.toLowerCase().replace(/\s+/g, "_");
  const albumImage = albums_img[albumImageKey];

  console.log(song.id);
  return (
    <div className="song_item" key={song.id}>
      <h3>{song.title}</h3>
      <img src={albumImage} alt="" className="article_img" />
      <p>Duration: {song.duration}</p>
      <p>Author: {song.author}</p>
      <p>Price: {song.price}$</p>
      <Link className="view_more" to={`/card/${song.id}`}>
        View more
      </Link>
    </div>
  );
};

export default SongCard;
