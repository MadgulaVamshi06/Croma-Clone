import React, { useContext, useState } from "react";
import { tvData } from "../data/tv";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductNavbar from "../components/ProductNavbar";

const TvPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [showFilters, setShowFilters] = useState(false); 

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? tvData
      : tvData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <div>
      <div>
        <ProductNavbar/>
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
      {tvData.map((phone, index) => (
        <div key={index} className="w-full p-2 md:w-auto">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={selectedProduct.includes(phone.brand)}
              onChange={() => companyHandler(phone.brand)}
            />
            <span className="ml-2">{phone.brand}</span>
          </label>
        </div>
      ))}
    </div>
  </div>
)}


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {filteredProduct.map((item, index) => (
          <div className="max-w-sm bg-black text-white p-4" key={index}>
            <Link to={`/computer/${item.id}`}>
              <img src={item.image} alt={item.model} className="rounded-sm" />
            </Link>
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
      <Footer />
    </div>
    </div>
  );
};

export default TvPage;
