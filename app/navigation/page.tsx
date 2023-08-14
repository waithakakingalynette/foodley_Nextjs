'use client'
import React, {useState}from "react";

type NavItem = "home" | "offer" | "service" | "menu" | "about";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState<NavItem>("home");

  const handleNavClick = (navItem: NavItem | null) => {
    setSelectedNav(navItem || "home");
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
    >
      Home
    </a>
    <a
      href="#"
      className={`nav-link ${selectedNav === 'offer' ? 'active' : ''}`}
      onClick={() => handleNavClick('offer')}
    >
      Offer
    </a>
    <a
      href="#"
      className={`nav-link ${selectedNav === 'service' ? 'active' : ''}`}
      onClick={() => handleNavClick('service')}
    >
      Service
    </a>
    <a
      href="#"
      className={`nav-link ${selectedNav === 'menu' ? 'active' : ''}`}
      onClick={() => handleNavClick('menu')}
    >
      Menu
    </a>
    <a
      href="#"
      className={`nav-link ${selectedNav === 'about' ? 'active' : ''}`}
      onClick={() => handleNavClick('about')}
    >
      About Us
    </a>
  </div>

            <div>
              <button className="bg-none px-4 py-2 rounded-full text-white" style={{color: "#E30B5C"}}>Login</button>
              <button className="bg-none px-4 py-2 rounded-full text-white" style={{backgroundColor: "#E30B5C"}}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Navbar;