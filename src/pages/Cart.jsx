import { FaShoppingCart, FaArrowLeft  } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useCart } from "../context/CartContext";
import './Cart.css'

const FREE_DELIVERY_ABOVE = 599;
const DELIVERY_FEE = 49

export default function Cart() {
  const {cart, updateQty, removeFromCart, clearCart,totalPrice } = useCart();
  const [ordered, setOrdered] = useState(false);

  const delivery = totalPrice >= FREE_DELIVERY_ABOVE || totalPrice === 0 ? 0 : DELIVERY_FEE;
  const grandTotal = totalPrice + delivery;

  const handleCheckout = () => {
    clearCart();
    setOrdered(true);
  }

  //Order Placed Msg
  if(ordered) {
    return(
      <section className="section">
        <div className="container cart-empty">
          <h1>Order placed</h1>
          <p>Thank you for shopping with Tvacha. Your skin says thanks.</p>
          <Link to="/products" className="btn">Continue shopping</Link>
        </div>
      </section>
    );
  }

  //Empty Cart
  if(cart.length === 0) {
    return(
      <section className="section">
        <div className="container cart-empty">
          <h1>Your cart is empty</h1>
          <p>Add a few favourites and they will show up here.</p>
          <Link to="/products" className="btn">Shop now</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h3>Your Cart <FaShoppingCart /></h3>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <Link to={`/product/${item.id}`} className="cart-imgbox">
                  <img src={item.image} alt={item.name} className="cart-img"></img>
                </Link>

                <div className="cart-details">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="cart-name">{item.name}</h3>
                  </Link>
                  <p className="cart-unit">₹{item.price} each</p>
                  <button className="cart-remove" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>

                <div className="cart-qty">
                  <button aria-label="Decrease quantity" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                  <span>{item.qty}</span>
                  <button aria-label="Increase quantity" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>

                <p className="cart-line">₹{item.price * item.qty}</p>
              </div>
            ))}
            <Link to='/products' className="cart-continue"><FaArrowLeft /> Continue Shopping</Link>
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="cart-row">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="cart-row">
              <span>Delivery</span>
              <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
            </div>
            {delivery > 0 && (
              <p className="cart-hint">
              Add ₹{FREE_DELIVERY_ABOVE - totalPrice} more for free delivery
              </p>
            )}
            <div className="cart-row cart-total">
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>
            <button className="btn cart-checkout" onClick={handleCheckout}>Checkout</button>
          </aside>
        </div>
      </div>
    </section>
  );
}