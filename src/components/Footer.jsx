import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="bg-black  text-white py-8">
        <div className="container mx-auto px-3 flex flex-wrap justify-around">
          {/* CONNECT WITH US */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 py-1 ">
            <h3 className="text-lg font-semibold mb-4">CONNECT WITH US</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 px-5 py-3 rounded-md bg-white text-black focus:outline-none mb-4"
            />
            <div className=" justify-start">
              {/* Social media icons */}
              {/* Replace with your actual social media icons */}
              <div className="flex">
                <a
                  href="https://www.youtube.com/user/CromaRetail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-2 "
                >
                  <AiFillYoutube className="text-2xl  hover:text-youtube" />
                </a>
                <a
                  href="https://www.facebook.com/CromaRetail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-5"
                >
                  <FaFacebookF className="text-2xl hover:text-iconColour" />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fcroma.retail%2F&is_from_rle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-5"
                >
                  <FaInstagramSquare  className="text-2xl"/>
                </a>
                <a
                  href="https://www.linkedin.com/company/infiniti-retail-limited-croma---a-tata-enterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-5"
                >
                  <FaLinkedinIn  className="text-2xl hover:text-iconColour"/>
                </a>
                <a
                  href="https://twitter.com/cromaretail?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-5"
                >
                  <FaTwitter className="text-2xl hover:text-iconColour" />
                </a>
              </div>
              <div>
                <p className="mt-8 text-sm">
                  © Copyright 2023 Croma. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 px-10 pl-3 ">
            <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
            <div className="md:flex justify-between ">
              <ul className="list-none md:mr-4  " >
                <Link to="/"  ><li className="mb-2 p-1.5 hover:text-customColor " >About Crome</li></Link>
                
                <li className="mb-2 p-1.5 hover:text-customColor ">Return Policy</li>

                <li className="mb-2 p-1.5 hover:text-customColor">B2B Orders</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Store Locator</li>
                <li className="mb-2 p-1.5 hover:text-customColor">E-Waste</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Help And Support</li>
              </ul>
              <ul className="list-none pr-8">
                <li className="mb-2 p-1.5 hover:text-customColor">Franchise </li>
                <li className="mb-2 p-1.5 hover:text-customColor">Site Map</li>

                <li className="mb-2 p-1.5 hover:text-customColor">Terms Of Use</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Disclaimer</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Privacy Policy</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Unboxed</li>
              </ul>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 px.5 ">
            <h3 className="text-lg font-semibold mb-4">PRODUCTS</h3>
            <div className="md:flex justify-between">
              <ul className="list-none md:mr-4">
                <li className="mb-2 p-1.5 hover:text-customColor">Home Appliances</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Phones & Wearables</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Computers & Tablets</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Kitchen Appliances</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Audio & Video</li>
                
              </ul>
              <ul className="list-none">
                <li className="mb-2 p-1.5 hover:text-customColor">Health & Fitness</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Grooming & Personal</li>
                <li className="mb-2 p-1.5 hover:text-customColor ">Cameras & Accessories</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Gaming</li>
                <li className="mb-2 p-1.5 hover:text-customColor">Accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
