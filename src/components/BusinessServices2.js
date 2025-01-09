import React from "react";
import "./BusinessServices2.css";

const BusinessServices = () => {
  const services = [
    {
      title: "Business Consulting & Strategy",
      description: "Strategic consulting for digital transformation and growth.",
      link: "/services/consulting",
    },
    {
      title: "Digital Transformation",
      description: "Enhancing efficiency and innovation across industries.",
      link: "/services/digital-transformation",
    },
    {
      title: "Data & Analytics",
      description: "Unlock insights with advanced analytics and AI.",
      link: "/services/data-analytics",
    },
    {
      title: "Technology Services",
      description: "Custom software, cloud, and IT solutions for your needs.",
      link: "/services/technology",
    },
    {
      title: "Business Process Services",
      description: "Outsourcing for HR, finance, and customer support.",
      link: "/services/process-services",
    },
    {
      title: "Cloud & Infrastructure",
      description: "Secure and scalable cloud solutions for IT optimization.",
      link: "/services/cloud",
    },
    {
      title: "Market Research & ESG",
      description: "Comprehensive analysis and sustainability strategies.",
      link: "/services/market-research",
    },
    {
      title: "Edutech & Institutions",
      description: "Custom solutions for educational platforms and institutes.",
      link: "/services/edutech",
    },
  ];

  return (
    <div className="business-services2">
      <h1>
        Explore Our <span className="highlight">Business Services</span>
      </h1>
      <div className="services-container2">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="service-card2"
            aria-label={`Learn more about ${service.title}`}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BusinessServices;

