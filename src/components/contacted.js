import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './contacted.css';

const ContactedPage = () => {
    return (
        <div>
            <header>
                <h1>Contact Us</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            <section className="message">
                <h2>Message sent!</h2>
                <p>We received your message/feedback and will contact you via email so stay tuned.</p>
                <form action="/">
                    <button>Return</button>
                </form>
            </section>

            <footer>
                <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default ContactedPage;