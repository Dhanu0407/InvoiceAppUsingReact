import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../assets/bglogin.png"; // Replace with the correct path to your image

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "100vh", // Full viewport height
        overflow: "hidden", // Prevent scrolling
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Overlay to add contrast */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay (more opacity for better contrast)
          zIndex: 1,
        }}
      ></div>

      {/* Login Form */}
      <div
        className="relative z-10 w-full max-w-lg p-10 rounded-lg shadow-lg"
        style={{
          background: "rgba(0, 0, 0, 0.9)", // Slightly opaque background
          backdropFilter: "blur(8px)", // Blur effect for transparency
        }}
      >
        {/* Logo and Customer Login */}
        <div className="flex items-center justify-center mb-6">
          <img
            src={require("../assets/logo.png")} // Replace with your logo path
            alt="Logo"
            className="w-16 h-16 rounded-full mr-4" // Circular logo
          />
          <h3
            className="text-3xl font-bold"
            style={{
              color: "white", // White text color
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Subtle text shadow
            }}
          >
Employee  Login    </h3>
        </div>

        <form>
          {/* Username Field */}
          <div className="relative mb-6">
            <span
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500"
              style={{ fontSize: "1.5rem" }}
            >
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 py-3 rounded bg-white border border-gray-300 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
              style={{ background: "rgba(255, 255, 255, 0.8)" }} // White background for input
            />
          </div>

          {/* Password Field */}
          <div className="relative mb-6">
            <span
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500"
              style={{ fontSize: "1.5rem" }}
            >
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 py-3 rounded bg-white border border-gray-300 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
              style={{ background: "rgba(255, 255, 255, 0.8)" }} // White background for input
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-sm text-white mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 text-red-500"
              />
              Remember me
            </label>
            <a href="/forgot-password" className="hover:underline text-red-500">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-200 text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
