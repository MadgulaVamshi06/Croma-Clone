import React from 'react'
import { Link } from 'react-router-dom'

const ProductNavbar = () => {
  return (
    <div>
        
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
    </div>
  )
}

export default ProductNavbar