import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

// Sample data for the testimonials
const testimonials = [
  {
    logo: "https://via.placeholder.com/40",
    companyName: "VM Intellectuals",
    testimonial:
      "Stoic & Salamander Global Corporation provided us with exceptional service, and the results far exceeded our expectations. Their expertise and attention to detail made all the difference in our project.",
    rating: "★★★★★",
  },
  {
    logo: "https://via.placeholder.com/40",
    companyName: "JSP Renewables",
    testimonial:
      "JSP Renewables experienced a seamless collaboration with Stoic & Salamander Global Corporation. Their team is highly professional, responsive, and dedicated to delivering top-notch solutions. Highly recommended.",
    rating: "★★★★★",
  },
  {
    logo: "https://via.placeholder.com/40",
    companyName: "Tech Solutions Ltd.",
    testimonial:
      "We were impressed by their attention to detail and ability to deliver results on time. Stoic & Salamander is a trusted partner for our business needs.",
    rating: "★★★★★",
  },
  {
    logo: "https://via.placeholder.com/40",
    companyName: "Innovate Inc.",
    testimonial:
      "The professionalism and dedication of their team are unmatched. A wonderful experience from start to finish!",
    rating: "★★★★★",
  },
  {
    logo: "https://via.placeholder.com/40",
    companyName: "NextGen Systems",
    testimonial:
      "The solutions provided by Stoic & Salamander exceeded our expectations. Their innovative approach was exactly what we needed.",
    rating: "★★★★★",
  },
  {
    logo: "https://via.placeholder.com/40",
    companyName: "Green Energy Co.",
    testimonial:
      "Fantastic results! Stoic & Salamander helped us achieve our goals quickly and efficiently. Highly recommended.",
    rating: "★★★★★",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <h1>
        Client Testimonials: Hear from <span className="highlight">Our Valued Partners</span>
      </h1>
      <p className="description">
        We take pride in our track record of successfully implementing transformative solutions that enhance operational efficiency, drive innovation, and deliver measurable value. Our impact spans multiple sectors, including financial services, healthcare, retail, manufacturing, telecommunications, public sector, software/IT, and logistics.
      </p>
      <div className="testimonial-cards-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
