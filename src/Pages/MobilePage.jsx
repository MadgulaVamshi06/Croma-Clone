import React, { useContext, useState } from "react";
import { mobileData } from "../data/mobile";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductNavbar from "../components/ProductNavbar";
import { FaTag, FaStar, FaShoppingCart } from "react-icons/fa";

const MobilePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== company));
    } else {
      setSelectedProduct([...selectedProduct, company]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? mobileData
      : mobileData.filter((item) => selectedProduct.includes(item.company));

  return (
    <div>
      <div>
        <ProductNavbar />
      </div>
      <div className="bg-backgroundColor">
        <button
          className="bg-customColor text-white font-bold py-2 px-4 ml-5 rounded"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Brand"}
        </button>
        <button className="bg-customColor text-white font-bold py-2 px-4 ml-5 rounded">
          Price
        </button>
        <button className="bg-customColor text-white font-bold py-2 px-4 ml-5 rounded">
          Categories
        </button>
        <button className="bg-customColor text-white font-bold py-2 px-4 ml-5 rounded">
          Processor Name
        </button>
        <select
          name="SortBy"
          id="sortBy"
          className="bg-customColor text-white font-bold py-2 px-4 ml-5 rounded"
        >
           <option value="lowToHigh">Sort By</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>

        {showFilters && (
          <div className="bg-gray-800 text-white p-4">
            <div className="flex flex-wrap justify-between items-center">
              {mobileData.map((phone, index) => (
                <div key={index} className="w-full p-2 md:w-auto">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      checked={selectedProduct.includes(phone.company)}
                      onChange={() => companyHandler(phone.company)}
                    />
                    <span className="ml-2">{phone.company}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {filteredProduct.map((item, index) => (
            <div className="max-w-sm bg-black text-white p-4" key={index}>
              <Link to={`/mobile/${item.id}`}>
                <img src={item.image} alt={item.model} className="rounded-sm" />
              </Link>
              <div className="bg-black p-4 text-white">
                <h3 className="text-md font-semibold">{item.model}</h3>
                <p className="text-sm mt-2">{item.description}</p>
                <div className="mt-4">
                  <p className="text-2xl">MRP: ₹{item.mrpPrice}</p>
                  <p className="text-2xl">Discount: {item.offerValue}%</p>
                  <p className="text-2xl">Offer Price: ₹{item.offerPrice}</p>
                </div>
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
        <Footer />
      </div>
    </div>
  );
};

export default MobilePage;
