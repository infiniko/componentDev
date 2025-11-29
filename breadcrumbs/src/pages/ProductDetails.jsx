import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div>
      <h2>{product.title}</h2>
      <div>Brand: {product.brand}</div>
      <img src={product?.images} height="300px" width="450px" />
    </div>
  );
};

export default ProductDetails;
