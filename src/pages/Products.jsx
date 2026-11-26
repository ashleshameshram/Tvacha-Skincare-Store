import { useSearchParams } from "react-router-dom";
import products,{ categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import './Products.css';

export default function Products() {
  const [searcParams, setSearchParams] = useSearchParams();
  const active = searcParams.get("category") || "All";
  const visible = 
    active === "All" ? products : products.filter((p) => p.category === active);
  
  const pick = (cat) => {
    if(cat === "All") setSearchParams({});
    else setSearchParams({ category : cat });
  }

  return (
    <section className="section">
      <div className="container">
        <h1>All Products</h1>
        <p className="products-count">{visible.length} products</p>

        <div className="products-filters">
          {categories.map((cat) => (
            <button key={cat} 
              className={`chip ${active === cat ? "is-active" : ""}`}
              onClick={() => pick(cat)}
            >
                {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p}/>
          ))}
        </div>
      </div>
    </section>
  );
}