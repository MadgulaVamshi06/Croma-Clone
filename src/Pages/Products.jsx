import React from "react";
import Mobiles from "../components/ProductComponents/Mobiles";
import Computer from "../components/ProductComponents/Computer";
import Ac from "../components/ProductComponents/Ac";
import Fridges from "../components/ProductComponents/Fridges";
import Kitchen from "../components/ProductComponents/Kitchen";
import Tv from "../components/ProductComponents/Tv";
import Watches from "../components/ProductComponents/Watches";
import Speakers from "../components/ProductComponents/Speakers";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <ul className="flex flex-wrap sm:flex-nowrap bg-black justify-around  text-lg sm:text-xl text-white p-4 overflow-x-auto">
        <Link to="/mobile">
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor  hover:text-customColor">
            Mobiles
          </li>
        </Link>
        <Link to="/computer">
          {" "}
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">Computer</li>
        </Link>

        <Link to="/watches">
          {" "}
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">Watches</li>
        </Link>
        <Link to="/speaker">
          {" "}
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">Speakers</li>
        </Link>
        <Link to="/ac">
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">AC</li>
        </Link>
        <Link to="/fridge">
          {" "}
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">Fridges</li>
        </Link>
        <Link to="/tv">
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">TV</li>
        </Link>
        <Link to="/men">
          {" "}
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">Men</li>
        </Link>
        <Link to="/women">
          {" "}
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">Women</li>
        </Link>
        <Link to="/kitchen">
          {" "}
          <li className="mr-6 mb-4 sm:mb-0 hover:text-customColor">Kitchen</li>
        </Link>
      </ul>

      <Mobiles />
      <Computer />
      <Watches />
      <Speakers />
      <Ac />
      <Fridges />
      <Tv />
      <Kitchen />
      <Footer />
    </>
  );
};

export default Products;
