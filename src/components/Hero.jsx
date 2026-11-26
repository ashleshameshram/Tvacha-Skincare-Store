import { Link } from "react-router-dom";
import serum from '../assets/serum1.png'
import cleanser from '../assets/cleanser1.png'
import cream from '../assets/Moisturizer1.png'
import './Hero.css'

export default function Hero() {
    return(
        <section className="hero">
            <div className="container hero__inner">
                <div className="hero__text">
                    <span className="hero__tag">New: Starter Routine Kit</span>
                    <h1>Skin First. <br></br> Always.</h1>
                    <p className="hero__sub">
                        Simple skincare with desi roots. Three easy steps, no confusing routines.
                    </p>

                    <div className="hero__cta">
                        <Link to='/products' className="btn">Shop now</Link>
                        <Link to='/products?category=Kits' className="btn btn-outline">
                            Build my routine
                        </Link>
                    </div>

                    <ul className="hero__trust">
                        <li>• Free delivery above ₹599</li>
                        <li>• Few ingredients</li>
                        <li>• Made for everyday</li>
                    </ul>
                </div>

                <div className="hero__visual">
                    <div className="hero__blob"></div>
                    <img className="hero__img hero__img--left" src={cleanser}
                        alt="Tvacha gel cleanser"></img>
                    <img className="hero__img hero__img--right" src={cream}
                        alt="Tvacha gel cream"></img>
                    <img className="hero__img hero__img--main" src={serum}
                        alt="Tvacha Vitamin C serum"></img>
                    <span className="hero__chip hero__chip--1">10% Vitamin C</span>
                    <span className="hero__chip hero__chip--2">Desi roots</span>
                </div>
            </div>
        </section>
    )
}