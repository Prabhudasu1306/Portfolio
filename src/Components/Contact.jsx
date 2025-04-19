import React from 'react';
import './Contact.css';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          I'd love to connect — whether it's a collaboration, opportunity, or just a friendly hello!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <FiPhoneCall className="contact-icon" />
          <h2>Phone</h2>
          <a href="tel:+919989123680" className="contact-link">
            +91 9963416533
          </a>
        </div>

        <div className="contact-card">
          <FiMail className="contact-icon" />
          <h2>Email</h2>
          <a
            href="mailto:prabhudasuparusu1306@gmail.com?subject=Inquiry&body=Hello, I would like to ask about..."
            className="contact-link"
          >
            prabhudasuparusu1306@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <FiMapPin className="contact-icon" />
          <h2>Location</h2>
          <p className="contact-location">Madhapur, Hyderabad, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
