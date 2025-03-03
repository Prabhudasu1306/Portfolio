import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">I'd love to hear from you! Feel free to reach out.</p>

      <div className="contact-info">
        <div className="contact-card">
          <h2>Phone</h2>
          <p><a href="tel:+919989123680">+91 99891 23680</a></p>
        </div>

        <div className="contact-card">
          <h2>Email</h2>
          <p>
            <a href="mailto:prabhudasuparusu1306@gmail.com?subject=Inquiry&body=Hello, I would like to ask about...">
              prabhudasuparusu1306@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h2>Location</h2>
          <p>123 Main Street, Madhapur, Hyderabad, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
