// Import React and required hooks
import React, { useRef, useEffect, useState } from 'react';
import './ESGCard.css'; // Import the CSS file
import buildingImage from '../assets/building.jpeg';

const ESGCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`esg-card ${isVisible ? 'visible' : ''}`}
      ref={cardRef}
    >
      {/* Left Section with Image */}
      <div className="image-section1">
        <img src={buildingImage} alt="Building" className="building-image1" />
      </div>

      {/* Right Section with Text */}
      <div className="text-section1">
        <h1>Leading the Charge in ESG Excellence</h1>
        <p>
          At Stoic & Salamander Global Corporation, we understand that today’s
          most successful businesses are those that are committed to
          Environmental, Social, and Governance (ESG) principles. Our expert ESG
          services are designed to integrate sustainability seamlessly into your
          strategy, ensuring not just compliance, but genuine impact and growth.
          Stay ahead with cutting-edge tools and methodologies that redefine ESG
          excellence. We offer bespoke ESG strategies that align with your
          unique business goals and industry requirements.
        </p>
      </div>
    </div>
  );
};

export default ESGCard;
