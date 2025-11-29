import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setTopProducts(data.products?.slice(0, 6)));
  }, []);
  return (
    <div>
      <div className="top-products">
        {topProducts.length > 0 &&
          topProducts.map((pro) => (
            <div key={pro.id}>
              <div className="card">
                <h3>{pro.title}</h3>
                <h4>{pro.category}</h4>
              </div>
            </div>
          ))}
      </div>
      <div
        style={{
          margin: "40px 10px",
          textAlign: "center",
          background: "rgb(49,49,49)",
          padding: "20px",
        }}
      >
        <Link to={"/products"}>Show All Products</Link>
      </div>
    </div>
  );
};

export default Home;
