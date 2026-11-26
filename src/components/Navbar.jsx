import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {IoCartOutline,IoWaterOutline,IoMenu,IoClose } from 'react-icons/io5'
import { useCart } from '../context/CartContext.jsx'
import './Navbar.css'

export default function Navbar() {
    const [open,setOpen] = useState(false);
    const { totalItems: cartCount } = useCart();

    return(
        <header className="navbar">
            <div className="container navbar__inner">
                <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
                <IoWaterOutline />tvacha
                </Link>

                <div className="navbar__right">
                    <nav className={`navbar__links ${open ? "is-open" : ""}`}>
                        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                        <NavLink to="/products" onClick={() => setOpen(false)}>Shop</NavLink>
                        <NavLink to="/products?category=Kits" onClick={() => setOpen(false)}>Kits</NavLink>
                    </nav>

                    <Link to="/cart" className="navbar__cart" aria-label="Cart">
                        <IoCartOutline size={26} />
                        <span className="navbar__badge">{cartCount}</span>
                    </Link>

                    <button
                        className="navbar__toggle"
                        aria-label="Toggle menu"
                        onClick={() => setOpen(!open)}>
                    {open ? <IoClose size={26} /> : <IoMenu size={26} />}
                    </button>
                </div>
            </div>
        </header>
    )
}

