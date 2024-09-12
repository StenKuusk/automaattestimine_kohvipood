import React from 'react';
import './App.css';
import './components/contact.css';

const ContactPage = () => {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
        <nav>
          <a href="homepage.html">Home</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </nav>
      </header>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>
        <form action="contacted.html">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;