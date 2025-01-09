import React from "react";

const ServicePage = ({ title }) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{title}</h1>
      <p>
        Welcome to the detailed page for {title}. Here, we will provide
        comprehensive information about the service.
      </p>
    </div>
  );
};

export default ServicePage;
