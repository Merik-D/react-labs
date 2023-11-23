import React from "react";
import "./Home.css";
import Article from "../../components/SongTemplate/SongTemplate";
import img from "../../Icons/image.png";
import { getAllSongs } from "../../services/song_api";
import { useState, useEffect } from "react";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [displayedSongs, setDisplayedSongs] = useState(3);

  useEffect(() => {
    getAllSongs().then((data) => {
      setSongs(data.songs);
    });
  }, []);

  const handleViewMore = () => {
    setDisplayedSongs(displayedSongs + 3);
  };

  return (
    <div className="third_section">
      <div className="container">
        <div className="hero">
          <img src={img} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            efficitur, nibh ut luctus faucibus, est arcu fermentum enim, eu
            convallis lectus ex quis tellus. Aliquam facilisis dictum nulla, eu
            condimentum enim. Pellentesque ut magna elementum, imperdiet velit
            ac, dapibus libero. Nullam pellentesque mauris erat, et pellentesque
            lorem aliquet sed. Nunc rutrum ligula non massa malesuada, non
            consectetur quam finibus. Duis pharetra, risus sed ornare accumsan,
            dolor lectus sollicitudin eros, at egestas nibh nibh quis est. Nam
            consequat lorem ut nunc mattis varius. Proin non faucibus justo.
            Fusce nec lorem cursus lectus rutrum mattis.
          </p>
        </div>
        <div className="articles">
          {Array.isArray(songs) ? (
            songs
              .slice(0, displayedSongs)
              .map((item) => <Article key={item.id} song={item} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="view_more__home" onClick={handleViewMore}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
