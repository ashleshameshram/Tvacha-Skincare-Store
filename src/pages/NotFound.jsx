import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container nf">
        <span className="nf-code">404</span>
        <h1>Oops, this page doesn't exist</h1>
        <p>The link may be broken, or the page may have moved.</p>
        <div className="nf-cta">
          <Link to="/" className="btn">Back to home</Link>
          <Link to="/products" className="btn btn-outline">Shop products</Link>
        </div>
      </div>
    </section>
  );
}