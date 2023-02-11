import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ title, image, description, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-item">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <span>{price}$</span>
      <br></br>

      <button
        onClick={() => {
          dispatch(addToCart({ title, image, description, price }));
        }}
      >
        Add to Cart
      </button>
      <br></br>
    </div>
  );
};

export default ProductItem;
