import { Link } from 'react-router-dom';
import products from '../data/products.js'
import './RoutineBanner.css'

const steps = [
    {no: '1', word: "Cleanse", item:"Gel Cleanser"},
    {no: '2', word: "Treat", item:"Vitamin C Serum"},
    {no: '3', word: "Protect", item:"Gelo Cream"}
];

export default function RoutineBanner() {
    const kit = products.find((p) => p.id === 11);

    return(
        <section className='section'>
            <div className="container">
                <div className="routine">
                <div className="routine-text">
                    <span className="routine-tag">3 steps, one box</span>
                    <h2>Cleanse. Treat. Protect.</h2>
                    <p className="routine-sub">
                        Skip the confusing 10-step routine. Our Starter Kit has everything
                        you need for glowing skin.
                    </p>

                    <ul className="routine-steps">
                    {steps.map((s) => (
                        <li key={s.no}>
                            <span className="routine-no">{s.no}</span>
                            <span>
                                <strong>{s.word}</strong> · {s.item}
                            </span>
                        </li>
                    ))}
                    </ul>

                    <div className="routine-cta">
                    <Link to={`/product/${kit.id}`} className="btn">
                        Get the kit · ₹{kit.price}
                    </Link>
                    <Link to="/products?category=Kits" className="btn btn-outline">
                        See all kits
                    </Link>
                    </div>
                </div>

                <div className="routine-visual">
                    <img src={kit.image} alt={kit.name} className="routine-img" />
                </div>
                </div>
            </div>
        </section>
    )
}