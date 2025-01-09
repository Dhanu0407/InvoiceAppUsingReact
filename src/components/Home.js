import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/image.png";
import BusinessServices from "./BusinessServices";
import StoicProduct from "./StoicProduct"
import Testimonials from "./Testimonials";
import ESGCard from "./card";
// import Teams from "./Teams"

const Home = () => {
  const [slideInImage, setSlideInImage] = useState(false);
  const [slideInText, setSlideInText] = useState(false);

  useEffect(() => {
    // Trigger sliding effects after the component mounts
    setTimeout(() => {
      setSlideInImage(true);
    }, 200); // Delay for the image
    setTimeout(() => {
      setSlideInText(true);
    }, 400); // Delay for the text
  }, []);

  return (
    <div>
      <div
        className={`p-5 space-y-8 bg-cover bg-center ${
          slideInImage ? "image-section" : ""
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "85vh",
        }}
      >
        <section
          className={`flex items-center justify-center text-center sm:text-left ${
            slideInText ? "text-section" : ""
          }`}
        >
          <div className="max-w-2xl mx-auto sm:ml-10" style={{ marginTop: "10%" }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-black shadow-sm mb-4">
              Delivering Enterprise
            </h1>
            <h1 className="text-4xl sm:text-5xl font-bold text-black shadow-sm">
              Solutions{" "}
              <span className="text-red-600 shadow-sm">Globally.</span>
            </h1>
          </div>
        </section>
      </div>

      <div className="py-10 px-4">
      <StoicProduct />

        <BusinessServices />

        <ESGCard/>
        <br></br>
        {/* <Teams/> */}
      
        <Testimonials/>
      </div>
    </div>
  );
};

export default Home;
