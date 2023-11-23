import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions";
import { albums_img } from "../../../components/ImageConstants/image_constants";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart_item">
      <img
        src={albums_img[item.album.toLowerCase().replace(/\s+/g, "_")]}
        alt={item.title}
      />
      <h3 className="title">{item.title}</h3>
      <p className="price">${item.price}</p>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
};

export default CartItem;
