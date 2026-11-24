import { useState } from 'react'
import { Link } from "react-router-dom";
import { IoWaterOutline } from "react-icons/io5";
import './Footer.css'

export default function Footer() {
    const [email, setEmail] = useState("");
    const [joined, setJoined] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setJoined(true);
        setEmail("");
    };

    return(
        <footer className="footer">
        <div className="container footer-grid">
            <div className="footer-brand">
                <span className="footer-logo"><IoWaterOutline /> tvacha</span>
                <p>Skin first. Always.</p>
                <p className="footer-small">Simple skincare with desi roots.</p>
            </div>

            <div>
                <h3>Shop</h3>
                <ul className="footer-links">
                    <li><Link to="/products">All products</Link></li>
                    <li><Link to="/products?category=Serums">Serums</Link></li>
                    <li><Link to="/products?category=Kits">Kits</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>

            <div>
                <h3>Get 10% off</h3>
                {joined ? (
                    <p className="footer-small">Thanks for joining! Check your inbox soon.</p>
                ) : (
                    <form className="footer-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Your email"
                        aria-label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="btn" type="submit">Join</button>
                    </form>
                )}
            </div>
        </div>

        <div className="container footer-bottom">
            <p>© 2026 Tvacha. A ShadowFox internship project.</p>
        </div>
    </footer>
    )
}