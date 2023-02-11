import { useSelector } from "react-redux";
import Loader from "../loader";
import ProductItem from "../product-item";

const ProductList = () => {
  const status = useSelector((state) => state.products.status);
  const products = useSelector((state) => state.products.entities);
  return status === "loading" ? (
    <Loader />
  ) : (
    <div className="product-list">
      {products.map(({ id, title, image, description, price }) => {
        return (
          <ProductItem
            key={id}
            title={title}
            image={image}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
