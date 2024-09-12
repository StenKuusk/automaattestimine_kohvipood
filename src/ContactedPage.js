import React from 'react';
import './App.css';
import './components/contacted.css';

const ContactedPage = () => {
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

      <section className="message">
        <h2>Message sent!</h2>
        <p>We received your message/feedback and will contact you via email so stay tuned.</p>
        <form action="homepage.html">
          <button type="submit">Return</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactedPage;