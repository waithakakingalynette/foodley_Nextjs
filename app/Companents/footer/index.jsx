import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white" style={{ backgroundColor: "#F3CFC6" }}>
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <div className="footer-logo">
            <h4 className="text-lg font-semibold text-pink-500">Foodish</h4>
            <small className="text-gray-500 font-light">Continue Foodish 2023 all rights reserved</small>
          </div>


        <div className="flex flex-col space-y-4">
          <div className="footer-logo">
            <h4 className="text-lg font-semibold text-pink-500">Follow Us on</h4>
            <div className="flex">
            <a href="#" className="w-10 h-10 p-2 mr-2 bg-gray-400  rounded-full text-center">
            <FontAwesomeIcon icon={faPinterest} aria-hidden="true" />
            </a>
            <a href="#" className="w-10 h-10 p-2 mr-2 bg-gray-400 rounded-full text-center">
            <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            </a>
            <a href="#" className="w-10 h-10 p-2 mr-2 bg-gray-400 rounded-full text-center">
           <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
           </a>
           <a href="#" className="w-10 h-10 p-2 bg-gray-400 rounded-full text-center">
           <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
           </a>
           </div>

          </div>
        </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-pink-500">Menu</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Offers</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">About Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-pink-500">Information</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Menu</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Quality</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Make a Choice</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Salad With Veggies</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Fast Delivery</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Subscribe</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-pink-500">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-white">Tel: +254000034278</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">info@Foodish.com</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">1234, Nairobi, Kenya</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
