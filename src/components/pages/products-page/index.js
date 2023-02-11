import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../features/products/productsSlice";
import ProductList from "../../product-list";

const ProductsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="products-page">
      <h2>Available products:</h2>
      <hr />
      <ProductList />
    </div>
  );
};

export default ProductsPage;
