import { Link } from "react-router-dom";
import products from '../Data/products.js';
import ProductCard from './ProductCard.jsx';
import { FaArrowRight } from "react-icons/fa";
import './Bestsellers.css'

export default function Bestsellers() {
    const best = products.filter((p) => 
        p.badge === "Bestseller").slice(0,4);

    return(
        <section className="section">
            <div className="container">
                <div className="best-head">
                    <h2 className="home-title">Bestsellers</h2>
                    <Link to="/products" className="best-all">View all <FaArrowRight /></Link>
                </div>

                <div className="best-grid">
                    {best.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </section>
    )
}