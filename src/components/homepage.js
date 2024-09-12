import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './homepage.css';

function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to My Coffee Shop</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero-image">
        <div className="hero-text">
          <h2>Discover Your Perfect Brew</h2>
          <p>We offer a wide range of high-quality coffee, that our customers can sip and enjoy.</p>
          <img src="/coffee3.jpg" alt="coffee" width="300" height="180" />
          <p>We also sell coffee beans that we use to brew that coffee for a fair price.</p>
        </div>
      </section>

      <section>
        <h2>Featured Products</h2>
        <p>Below, there is a list of our featured coffee bean products.</p>
        <div className="product-container">
          <img src="/coffee1.jpg" alt="Coffee 1" width="200" height="200" />
          <img src="/coffee2.jpg" alt="Coffee 2" width="200" height="200" />
        </div>
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
        <Link to="/shop" className="buy-now-button">Buy now!</Link>
      </footer>
    </div>
  );
}

export default HomePage;
