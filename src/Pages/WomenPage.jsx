
import React from "react";
import { womanData  } from "../data/women";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductNavbar from "../components/ProductNavbar";
const WomenPage = () => {
  return (
     <div>
      <div>
     <ProductNavbar/>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {womanData.map((item, index) => (
        <div className="max-w-sm bg-black text-white p-4" key={index}>
          <img src={item.image} alt={item.model} className="rounded-sm" />
          <div className="bg-black p-4">
            <h3 className="text-md">{item.model}</h3>
            <p>{item.description}</p>
            <p className="text-white text-2xl">₹{item.price}</p>
          </div>
         
          <div className="bg-black p-4 flex justify-between mt-4">
            <button className="bg-buynow text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1">
              Buy now
            </button>
            <button className="bg-transparent border border-solid border-green-500 text-greenblue hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1">
              Add to cart
            </button>
          </div>
        </div>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default WomenPage;
