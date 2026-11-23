import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../Data/products.js'
import { useCart } from '../Context/CartContext.jsx'
import ProductCard from '../Components/ProductCard.jsx'
import './ProductDetails.css'

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setQty(1);
    window.scrollTo(0,0);
  },[]);

  if(!product) {
    return(
      <section className='section'>
        <div className='container'>
          <h1>Product not found</h1>
          <Link to="/products" className='btn pd-block'>Back to shop</Link>
        </div>
      </section>
    );
  }

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.id !== product.id
  );

  const related = [...sameCategory, ...others].slice(0,4);

  return (
    <section className="section">
      <div className="container">
        <p className='pd-crumbs'>
          <Link to='/products'>Shop</Link> / {product.category} / {product.name}
        </p>
        
        <div className='pd-grid'>
          <div className='pd-imgbox'>
            <img src={product.image} alt={product.name} className="pd-img"></img>
          </div>

          <div className='pd-info'>
            {product.badge && <span className='pd-badge'>{product.badge}</span>}
            <h1 className="pd-title">{product.name}</h1>
            <p className='pd-category'>{product.category}</p>
            <p className='pd-price'>Rs.{product.price}</p>
            <p className='pd-desc'>{product.description}</p>

            <div className='pd-buy'>
              <div className='pd-qty'>
                <button aria-label='Decrease quantity' onClick={() => setQty(Math.max(1,qty - 1))}>-</button>
                <span>{qty}</span>
                <button aria-label='Increase quantity' onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <button className='btn pd-add' onClick={handleAdd}>
                {added ? "Added ✓" : "Add to Cart"}
              </button>
            </div>
            <p className='pd-note'>Free delivery above ₹599 </p>

            <div className='pd-block'>
              <h3>Key Ingredients</h3>
              <ul className='pd-ingredients'>
                {product.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </div>

            <div className='pd-block'>
              <h3>How to use</h3>
              <p>{product.howToUse}</p>
            </div>
          </div>
        </div>

        <h2 className='pd-related-title'>You may also like</h2>
        <div className='pd-related'>
            {related.map((p) => (
              <ProductCard key={p.id} product={p}/>
            ))}
        </div>
      </div>
    </section>
  );
}