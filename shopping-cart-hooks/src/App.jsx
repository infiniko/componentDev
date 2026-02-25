import "./App.css";
import { useCart } from "./hooks/useCart";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard.jsx";
import Card from "./components/Cart.jsx";
function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <>
      <div className="app">
        <header>
          <h1>Shopping cart</h1>
        </header>
        <main className="products">
          <section>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </section>
          <Card
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            total={total}
          />
        </main>
      </div>
    </>
  );
}

export default App;
