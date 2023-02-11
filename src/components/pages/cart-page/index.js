import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <h1>Cart page</h1>
      <p>Total price: {cart.totalPrice}$</p>
      <button
        onClick={() => {
          function clearCart() {
            localStorage.clear();
            window.location.reload();
          }

          clearCart();
        }}
      >
        Clear Cart
      </button>
      <br />
      <br />
      {cart.entities.map(({ id, title, image, description, price }) => {
        return (
          <div className="product-item" key={id}>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p>{description}</p>
            <span>{price}$</span>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
