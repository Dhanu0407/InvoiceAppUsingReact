import React from 'react';
import './contactUs.css'; // Importing the updated CSS file for styling

// Contact Info Section
function ContactInfo() {
  return (
    <div className="contact-container">
      <h1>Get in touch with our team</h1>
      <p className="description">
        Contact us for tailored enterprise solutions, including cloud
        applications, ERP, CRM, HRMS, and project management software. We're here
        to help your business.
      </p>
      <div className="contact-details">
        <p><strong>Support</strong><br />
          020-68280688 / +91 7276193805
        </p>
        <p><strong>Inquiry</strong><br />
          office@stoicsalamander.com
        </p>
        <p><strong>Address</strong><br />
          Office 01, Level 8, Wing B, City Vista,<br />
          Kharadi, Pune, Maharashtra, India 411014
        </p>
      </div>
    </div>
  );
}

// Contact Form Section
function ContactForm() {
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Submit your inquiry now
        </button>
      </form>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="contact-us-page">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default ContactUs;
