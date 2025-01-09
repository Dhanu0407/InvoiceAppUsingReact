'use client'

import { useState } from 'react';

export default function ProductShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getCardStyle = (index) => {
    const isHovered = hoveredCard === index;
    return {
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
      borderColor: isHovered ? 'red' : 'transparent',
      borderWidth: '4px',
      borderStyle: 'solid',
      backgroundColor: isHovered ? 'red' : 'white',
      color: isHovered ? 'white' : 'black',
    };
  };

  const getHeadingStyle = (index) => {
    const isHovered = hoveredCard === index;
    return {
      transition: 'color 0.3s ease-in-out',
      color: isHovered ? 'darkred' : '#dc2626', // darkred when hovered, otherwise the original red color
    };
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 bg-black text-white">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <span className="text-white">Bespoke</span>{' '}
          <span className="text-red-600">Stoic Products</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
          At Stoic & Salamander Global Corporation, we are dedicated to transforming industries with our innovative
          solutions and unwavering commitment to excellence. Our mission is to create value, drive progress, and
          foster sustainable growth across a wide array of sectors.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div 
          className="border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          style={getCardStyle(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="pb-4">
            <div className="h-48 mb-4 overflow-hidden rounded-t-lg">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Private jet flying through clouds"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold px-4" style={getHeadingStyle(0)}>Stoic One</h2>
          </div>
          <div className="p-4">
            <p style={{ color: 'inherit' }}>
              Our cloud application services streamline your operations, enhancing efficiency and
              scalability for your business.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          style={getCardStyle(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="pb-4">
            <div className="h-48 mb-4 overflow-hidden rounded-t-lg">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Business meeting scene"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold px-4" style={getHeadingStyle(1)}>Stoic Cloud</h2>
          </div>
          <div className="p-4">
            <p style={{ color: 'inherit' }}>
              Advanced cloud solutions designed to elevate your business operations and enhance
              digital transformation.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          style={getCardStyle(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="pb-4">
            <div className="h-48 mb-4 overflow-hidden rounded-t-lg">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Enterprise software interface"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold px-4" style={getHeadingStyle(2)}>Enterprise Application</h2>
          </div>
          <div className="p-4">
            <p style={{ color: 'inherit' }}>
              Comprehensive enterprise solutions that drive innovation and streamline business
              processes effectively.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div 
          className="border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          style={getCardStyle(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="pb-4">
            <div className="h-48 mb-4 overflow-hidden rounded-t-lg">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Cloud computing visualization"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold px-4" style={getHeadingStyle(3)}>Free Cloud Suite</h2>
          </div>
          <div className="p-4">
            <p style={{ color: 'inherit' }}>
              Experience our cloud capabilities with our free suite of essential business tools
              and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

