import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions";
import { NavLink, useParams } from "react-router-dom";
import { getSongById } from "../../services/song_api";
import "./ItemPage.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { albums_img } from "../../components/ImageConstants/image_constants";
import Loader from "../../components/Loader/Loader";

const ItemPage = () => {
  const { songId } = useParams();
  const [item, setItem] = useState({});
  const [showLyrics, setShowLyrics] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    const fetchData = async () => {
      const minimumDuration = 500;
      const startTime = Date.now();
      try {
        const data = await getSongById(songId);
        setItem(data.song);
      } catch (error) {
        console.error("Error fetching song:", error);
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumDuration - elapsedTime);
        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
      }
    };

    fetchData();
  }, [songId]);

  const toggleLyrics = () => {
    setShowLyrics(!showLyrics);
  };

  const handleToggleCart = () => {
    const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (isInCart) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(addToCart(item));
    }
  };

  return (
    <div>
      <div className="section">
        {loading ? (
          <Loader />
        ) : (
          item && (
            <div className="item_container" key={item.id}>
              <div className="second_section_inner">
                <div>
                  <h1 className="second_section__title">{item.title}</h1>
                  <p className="second_section__paragraph">
                    Duration: <h3>{item.duration}</h3>
                  </p>
                  <p className="second_section__paragraph">
                    Author: <h3>{item.author}</h3>
                  </p>
                  <p className="second_section__paragraph">
                    Album: <h3>{item.album}</h3>
                  </p>
                  <p className="second_section__paragraph">
                    Auditions: <h3>{item.auditions} per month</h3>
                  </p>
                </div>
                <div>
                  {item.album && (
                    <img
                      src={
                        albums_img[
                          item.album.toLowerCase().replace(/\s+/g, "_")
                        ]
                      }
                      alt={item.album}
                      className="second_section_img"
                    />
                  )}
                </div>
              </div>
              {showLyrics && (
                <div className="lyrics_block">
                  <h2>Lyrics</h2>
                  <p>
                    {item.lyrics.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              )}
              <div className="view_lyrics">
                <button className="item_page_button " onClick={toggleLyrics}>
                  {showLyrics ? "Hide Lyrics" : "View Lyrics"}
                </button>
              </div>
            </div>
          )
        )}
      </div>
      {!loading && (
        <div className="bottom_panel">
          <h3>Price: {item.price}$</h3>
          <div className="buttons">
            <NavLink className="item_page_button" to={`/catalog`}>
              Back
            </NavLink>
            <button className="item_page_button" onClick={handleToggleCart}>
              {cartItems.some((cartItem) => cartItem.id === item.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPage;
