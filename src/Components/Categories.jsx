import { Link } from 'react-router-dom'
import CleanserTile from "../assets/CleanserTile.jpeg"
import MoisturizerTile from "../assets/MoisturizerTile.jpeg"
import SunCareTile from "../assets/SunCareTile.jpeg"
import SerumTile from '../assets/SerumTile.jpeg'
import './Categories.css'

const tiles = [
    { name: "Cleansers", image: CleanserTile },
    { name: "Serums", image: SerumTile },
    { name: "Moisturizers", image: MoisturizerTile },
    { name: "Sun care", image: SunCareTile },
];

export default function Categories() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="home-title">Shop by category</h2>
                <div className="cat-grid">
                {tiles.map((t) => (
                    <Link
                    key={t.name}
                    to={`/products?category=${encodeURIComponent(t.name)}`}
                    className="cat-tile"
                    >
                    <img src={t.image} alt={`${t.name} by Tvacha`} className="cat-img" />
                    <span className="cat-label">{t.name}</span>
                    </Link>
                ))}
                </div>
            </div>
        </section>
    );
}