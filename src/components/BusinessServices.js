import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BusinessServices.css";

const BusinessServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Business Consulting and Strategy",
      description:
        "Provide strategic consulting services to help businesses formulate and execute digital transformation and growth strategies.",
      path: "/services/business-consulting",
    },
    {
      title: "Digital Transformation & Services",
      description:
        "Facilitate digital transformation initiatives across industries, focusing on enhancing customer experiences, operational efficiency, and innovation.",
      path: "/services/business-consulting",
    },
    {
      title: "Data and Analytics Services",
      description:
        "Offer data management, integration, and analytics services to derive actionable insights from data by implementing advanced analytics & AI.",
      path: "/services/business-consulting",
    },
    {
      title: "Technology Services & Products",
      description:
        "From software development and cloud services to cybersecurity and IT consulting, we offer end-to-end technology solutions tailored to your business needs.",
      path: "/services/business-consulting",
    },
    {
      title: "Business Process & Services",
      description:
        "Offer outsourcing and managed services for business processes, including finance and accounting, human resources, and customer support operations.",
      path: "/services/business-consulting",
    },
    {
      title: "Cloud & Infrastructure Services",
      description:
        "Offer cloud advisory, migration, and management services to optimize IT infrastructure and enable scalable and secure cloud solutions.",
      path: "/services/business-consulting",
    },
    {
      title: "Market Research & ESG Services",
      description:
        "We offer you comprehensive market analysis for strategic decision-making and tailored ESG strategies to enhance your sustainability and governance performance.",
      path: "/services/business-consulting",
    },
    {
      title: "Edutech & Institutions",
      description:
        "Tailor services to meet the unique needs of educational institutes and educational platforms with bespoke learning management systems, exam portals software.",
      path: "/services/business-consulting",
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const observerOptions = {
      root: null, // Observe relative to the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    cards.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="business-services">
      <h1>
        Unlock Possibilities with <span className="highlight">Business Services</span>
      </h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleCardClick(service.path)}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessServices;
