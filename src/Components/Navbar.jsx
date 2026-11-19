import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {IoWaterOutline,IoCartOutline } from 'react-icons/io5'

export default function Navbar() {
    const [open,setOpen] = useState(false);
    const cartCount = 0;

    return(
        <header className='navbar'>
            <div className='container navbar__inner'>
                <Link to='/' className="navbar__logo" onClick={() => setOpen(false)}>
                    <IoWaterOutline /> tvacha
                </Link>

                <nav className={`Navbar__links ${open ? "is-open" : ""}`}>
                    <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to='/products' onClick={() => setOpen(false)}>Shop</NavLink>
                    <NavLink to='/products' onClick={() => setOpen(false)}>Kits</NavLink>
                </nav>
            </div>

            <div className="navbar__actions">
                <Link to='/cart' className="navbar__cart" aria-label="Cart">
                    <IoCartOutline size={26} />
                    <span className="navbar__badge">{cartCount}</span>
                </Link>

                <button className="navbar__toggle" 
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}>
                    {open ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
                </button>
            </div>
        </header>
    )
}

