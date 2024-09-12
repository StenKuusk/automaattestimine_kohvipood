import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import './purchase.css';

function PurchasePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state ? location.state.totalPrice : 0;

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    totalPrice: totalPrice
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/purchase', formData);
      console.log('Purchase made:', response.data);
      navigate('/success');
    } catch (error) {
      console.error('Error making purchase:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>Purchase</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <section className="purchase-section">
        <h2>Enter Payment Details</h2>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
          <button type="submit">Purchase</button>
        </form>
      </section>
      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PurchasePage;