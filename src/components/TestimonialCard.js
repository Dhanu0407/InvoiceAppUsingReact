import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ logo, companyName, testimonial, rating }) => {
  return (
    <div className="testimonial-card">
      <div className="rating">{rating}</div>
      <p className="testimonial">"{testimonial}"</p>
      <div className="company-info">
        <img src={logo} alt={`${companyName} logo`} className="company-logo" />
        <span className="company-name">{companyName}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
