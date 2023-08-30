'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState(null);

  const handleNavClick = (navItem) => {
    setSelectedNav(navItem || null);
  };

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto p-4">
        <div className="nav-bar-container flex items-center justify-around p-5 text-black">
          <a href="/" className="logo text-xl font-semibold text-gray-800">
            Foodish
          </a>

          <div className="nav flex gap-5">
            <a
              href="#"
              className={`nav-link ${selectedNav === null ? 'active' : ''}`}
              onClick={() => handleNavClick(null)}
              style={{fontsize: "18px",
              color:"#333" ,
              textdecoration: "none",
              margin: "0 20px",
              transition:"color 0.3s ease" ,
              marginleft: "80px"}}
            >
              Home
            </a>
            <a
              href="#"
              className={`nav-link ${selectedNav === 'offer' ? 'active' : ''}`}
              onClick={() => handleNavClick('offer')}
              style={{ fontsize: "18px",
              color:"#333" ,
              textdecoration: "none",
              margin: "0 20px",
              transition:"color 0.3s ease" ,
              marginleft: "80px" }}
            >
              Offer
            </a>
            <a
              href="#"
              className={`nav-link ${selectedNav === 'service' ? 'active' : ''}`}
              onClick={() => handleNavClick('service')}
              style={{ fontsize: "18px",
              color:"#333" ,
              textdecoration: "none",
              margin: "0 20px",
              transition:"color 0.3s ease" ,
              marginleft: "80px" }}
            >
              Service
            </a>
            <a
              href="#"
              className={`nav-link ${selectedNav === 'menu' ? 'active' : ''}`}
              onClick={() => handleNavClick('menu')}
              style={{ fontsize: "18px",
              color:"#333" ,
              textdecoration: "none",
              margin: "0 20px",
              transition:"color 0.3s ease" ,
              marginleft: "80px" }}
            >
              Menu
            </a>
            <a
              href="#"
              className={`nav-link ${selectedNav === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
              style={{ fontsize: "18px",
                color:"#333" ,
                textdecoration: "none",
                margin: "0 20px",
                transition:"color 0.3s ease" ,
                marginleft: "80px" }}
            >
              About Us
            </a>
          </div>

          <div>
            <button
              className="bg-none px-4 py-2 rounded-full text-white"
              style={{ fontsize: "18px",
              color:"#333" ,
              textdecoration: "none",
              margin: "0 20px",
              transition:"color 0.3s ease" ,
              marginleft: "80px"}}
            >
              Login
            </button>
            <button
              className="bg-none px-4 py-2 rounded-full text-white"
              style={{ borderColor: "#E30B5C",color:"rgb(216, 114, 114)",  border: "3px solid rgb(224, 126, 126)",fontsize: "16px" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;