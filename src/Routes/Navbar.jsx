import React, { useContext } from "react";
// import logo from "../assets/logo.svg";
import { IoMenuOutline, IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import Box from "../components/Box";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { isAuth, toggle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    toggle();
    navigate("/");
    setCartItems([]);
  };
  return (
    <header className="bg-black text-white flex justify-between h-20">
      <Box>
        {/* desktop and table version */}
        <div className=" hidden  items-center justify-between w-full md:flex">
          <div className="p-3 flex items-center gap-12 w-4/5">
            <div className="w-32 min-w-[128px]">
              <Link to="/">
               <IoHomeOutline/>
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/products">
                <IoMenuOutline className="text-3xl" />
              </Link>
              <p className="text-m">Menu</p>
            </div>
            <div className="flex items-center bg-white h-9 w-full max-w-md px-2 rounded-md">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black"
              />
              <CiSearch className="text-black text-2xl " />
            </div>
          </div>

          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-xl" />
              <p className="whitespace-nowrap text-sm">Hyderabad 500079</p>
              <GoPencil className="text-xs" />
            </div>
            <div className="flex items-center gap-9">
              <Link to="/login">
                <FaRegUser />
              </Link>
              {isAuth ? (
                <button
                  className="whitespace-nowrap text-sm px-3 py-2 rounded-md bg-customColor text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                
              ) : (
                <Link to="/login">
                <button className="whitespace-nowrap text-sm px-3 py-2 rounded-md bg-customColor text-white">
                  Login
                </button>
                </Link>
              )}
            </div>
            <div className=" text-2xl relative">
              <Link to="/cart">
                <BsCart />
              </Link>
              <p className="text-xs w-3 text-center h-3 flex items-center justify-center rounded-full bg-greenblue absolute top-0 -right-2 text-black">
                {cartItems.length}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="md:hidden">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Link to="/products">
                  <IoMenuOutline className="text-3xl" />
                </Link>
              </div>
              <div className="w-20 ">
                <Link to="/">
                  <img src="" className="w-full" />
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3 mr-2">
              <div className="flex items-center gap-3 mr-2">
                <div className="text-xl">
                  <Link to="/login" className="inline-block">
                    <FaRegUser />
                  </Link>
                  {isAuth ? (
                    <button
                      className="whitespace-nowrap text-sm px-3 py-2 rounded-md bg-customColor text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      className="whitespace-nowrap text-sm px-3 py-2 rounded-md bg-customColor text-white"
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
              <div className=" text-xl relative">
                <Link to="/cart">
                  <BsCart />
                </Link>
                <p className="text-xs w-3 text-center h-3 flex items-center justify-center rounded-full bg-greenblue absolute top-0 -right-2 text-black">
                  {cartItems.length}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white h-7 w-full max-w-full px-2 mt-1 rounded-md">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black"
            />
            <CiSearch className="text-black text-2xl " />
          </div>
        </div>
      </Box>
    </header>
  );
};

export default Navbar;
