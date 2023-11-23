import React, { useEffect, useState } from "react";
import "./Catalog.css";
import { getAllSongs } from "../../services/song_api";
import SongCard from "./SongCard/SongCard";
import Loader from "../../components/Loader/Loader";

const Catalog = ({ searchQuery, selectedAuthor, selectedPrice }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true);

      const minimumDuration = 500;
      const startTime = Date.now();

      try {
        const data = await getAllSongs({
          search: searchQuery,
          author: selectedAuthor,
          price: selectedPrice,
        });
        setItems(data.songs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumDuration - elapsedTime);

        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
      }
    };

    fetchSongs();
  }, [searchQuery, selectedAuthor, selectedPrice]);

  return (
    <div className="songs">
      {loading ? (
        <Loader />
      ) : items.length > 0 ? (
        items.map((item) => <SongCard song={item} key={item.id} />)
      ) : (
        <p>No songs found based on the given parameters.</p>
      )}
    </div>
  );
};

export default Catalog;
