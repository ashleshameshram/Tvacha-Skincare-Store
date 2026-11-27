import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const reviews = [
  {
    name: "Aarohi S.",
    city: "Nagpur",
    product: "Glow Up Vitamin C Serum",
    text: "Finally a routine I actually stick to. The serum feels so light on my skin.",
    color: "var(--haldi-soft)",
  },
  {
    name: "Riya M.",
    city: "Pune",
    product: "Dew Drop Gel Cream",
    text: "Cute packaging and simple steps. My skin feels soft and fresh all day.",
    color: "var(--gulabi-soft)",
  },
  {
    name: "Karan P.",
    city: "Mumbai",
    product: "Sun Shield SPF 50",
    text: "No white cast and not greasy. It's the first sunscreen I wear every day.",
    color: "var(--pudina-soft)",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="home-title">Loved by skin like yours</h2>
        <div className="test-grid">
          {reviews.map((r) => (
            <figure className="test-card" key={r.name} style={{ background: r.color }}>
              <div className="test-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <blockquote className="test-text">"{r.text}"</blockquote>
              <figcaption className="test-who">
                <strong>{r.name}</strong>{r.city}
                <span>Bought: {r.product}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}