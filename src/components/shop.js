import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import './shop.css';

function ShopPage() {
  const [cart, setCart] = useState([]);
  const prices = { 'Classic': 9.99, 'Quality': 12.99 };
  const totalPrice = cart.reduce((total, item) => total + prices[item], 0);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart(currentCart => [...currentCart, product]);
  };

  const removeFromCart = (product) => {
    setCart(currentCart => currentCart.filter(item => item !== product));
  };

  return (
    <div>
      <header>
        <h1>Shop</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="product-list">
        <h2>Our Products</h2>
        <div className="product">
          <h3>Classic</h3>
          <img src="/coffee1.jpg" alt="Coffee 1" width="200" height="200" />
          <p>Our first handcrafted and brewed coffee beans.</p>
          <p>$9.99</p>
          <button onClick={() => addToCart('Classic')}>Add to Cart</button>
        </div>
        <div className="product">
          <h3>Quality</h3>
          <img src="/coffee2.jpg" alt="Coffee 2" width="200" height="200" />
          <p>Later down the line, we came up with the most quality rich coffee beans.</p>
          <p>Each brew of this, holds very rich and satisfying taste, which keeps you satisfied.</p>
          <p>$12.99</p>
          <button onClick={() => addToCart('Quality')}>Add to Cart</button>
        </div>
      </section>

      <section className="cart">
        <h2>Your Cart</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
          </div>
        ))}
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
        <Link to="/purchase" state={{ totalPrice }} className="purchase-button">Proceed to Purchase</Link>
      </footer>
    </div>
  );
}

export default ShopPage;