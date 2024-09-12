import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './about.css';

function AboutPage() {
  return (
    <div>
      <header>
        <h1>About Us</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>Welcome to My Coffee Shop, where we are passionate about serving the finest coffee.</p>
          <p>Our journey began with a love for coffee and a desire to create a warm and inviting space for coffee enthusiasts to gather, relax, and enjoy a cup of freshly brewed coffee.</p>
          <p>At My Coffee Shop, we carefully select the best beans from around the world and roast them to perfection to bring out their unique flavors and aromas. Whether you prefer a rich espresso, a creamy latte, or a refreshing cold brew, we have something for everyone.</p>
          <p>Come visit us and experience the magic of My Coffee Shop!</p>
        </div>
      </section>

      <footer>
        <Link to="/shop" className="buy-now-button">Buy now!</Link>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
