import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './success.css';

function SuccessPage() {
  return (
    <div>
      <header>
        <h1>Congratulations!</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="success-section">
        <h2>Thank You for Your Purchase</h2>
        <p>Your order has been successfully placed and is now in production.</p>
        <p>We will notify you once your order has been shipped out.</p>
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SuccessPage;
