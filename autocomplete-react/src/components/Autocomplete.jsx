import { useEffect, useState } from "react";
import "../App.css";

function Autocomplete() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [showList, setShowList] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      if (cache[searchText]) {
        setProducts(cache[searchText]);
        return;
      }
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}`
      );
      const data = await response.json();
      setProducts(data?.products);
      setCache((prev) => ({ ...prev, [searchText]: data?.products }));
    }
    const timer = setTimeout(() => {
      fetchProducts();
    }, 400);

    return () => clearTimeout(timer);
  }, [searchText, cache]);
  return (
    <div className="auto-complete">
      <input
        type="text"
        className="input-box"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
      />
      <div className="results">
        {products.length > 0 &&
          showList &&
          products.map((product) => (
            <div className="prod-name" key={product.id}>
              {product.title}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Autocomplete;
