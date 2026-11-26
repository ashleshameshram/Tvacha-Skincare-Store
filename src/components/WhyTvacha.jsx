import FewIngredients from '../assets/FewIngredients.jpeg'
import DesiRoots from '../assets/DesiRoots.jpeg'
import MadeForEveryday from '../assets/MadeForEveryday.jpeg'
import './WhyTvacha.css'

const points = [
  {
    image: FewIngredients,
    title: "Few ingredients",
    text: "Every formula has a clear purpose and nothing extra.",
    color: "var(--pudina-soft)",
  },
  {
    image: DesiRoots,
    title: "Desi roots",
    text: "Haldi, neem, aloe and rose, paired with proven actives.",
    color: "var(--haldi-soft)",
  },
  {
    image: MadeForEveryday,
    title: "Made for everyday",
    text: "Light textures and a routine you can finish in minutes.",
    color: "var(--gulabi-soft)",
  },
];

export default function WhyTvacha() {
    return(
        <section className="section">
            <div className="container">
                <h2 className="home-title">Why Tvacha</h2>
                <div className="why-grid">
                {points.map((p) => (
                    <div className="why-card" key={p.title} style={{ background: p.color }}>
                    <img src={p.image} alt={p.title} className="why-img" />
                    <div className="why-body">
                        <h3>{p.title}</h3>
                        <p>{p.text}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}