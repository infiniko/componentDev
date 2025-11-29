import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ALL PRODUCTS</h1>
      <div className="products">
        {products.length > 0 &&
          products.map((pro) => (
            <Link key={pro.id} to={`./${pro.id}`}>
              <div className="card">
                <h3>{pro.title}</h3>
                <h4>{pro.category}</h4>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
