import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import EmployeeLogin from './components/EmployeeLogin';
import ClientLogin from './components/ClientLogin';
import Technologies from './components/Technologies';
import Expertise from './components/Expertise';
import BusinessServices from "./components/BusinessServices";
import ServicePage from "./components/ServicePageBusiness"; 
import ESGCard from "./components/card"; 
import Teams from "./components/Teams"; 
import Login from "./components/EmployeeLogin"


function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar />
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employee-login" element={<EmployeeLogin />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/technologies/:tech" element={<Technologies />} />
            <Route path="/expertises/:expertise" element={<Expertise />} />
            <Route path="/business-services" element={<BusinessServices />} />
            <Route path="/business-services" element={<BusinessServices />} />
            <Route path="/card" element={<ESGCard />} />
            <Route path="/teams" element={<Teams />} />

            <Route path="/employee-login" element={<Login />} />


        <Route path="/Testimonials" element={<ServicePage title="Testimonials" />} />
        {/* <Route path="/service-Page" element={<ServicePage title="Digital Transformation & Services" />} />
        <Route path="/service-Page" element={<ServicePage title="Data and Analytics Services" />} />
        <Route path="/service-Page" element={<ServicePage title="Technology Services & Products" />} />
        <Route path="/service-Page" element={<ServicePage title="Business Process & Services" />} />
        <Route path="/service-Page" element={<ServicePage title="Cloud & Infrastructure Services" />} />
        <Route path="/service-Page" element={<ServicePage title="Market Research & ESG Services" />} />
        <Route path="/service-Page" element={<ServicePage title="Edutech & Institutions" />} />
             */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
