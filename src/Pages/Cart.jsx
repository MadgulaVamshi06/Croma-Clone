import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const subTotal = parseFloat(
    cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2)
  );

  return (
    <div className="container mx-auto my-10 p-5 bg-cart">
      {cartItems.length === 0 ? (
        <div className="">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl mb-5">
            Your Cart
          </h1>
          <img
            src="https://t4.ftcdn.net/jpg/03/18/62/29/240_F_318622912_IgyaJDXVei9YTsw2BWuJzQLxY6Mr6kDE.jpg"
            className="mx-auto mb-5"
            alt="Empty Cart"
          />
          <p className="text-gray-600 text-center mb-2">Your Cart is Empty</p>
          <Link to="/products">
            <p className="text-buynow text-center mb-5">Continue Shopping</p>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row bg-white">
          <div className="w-full md:w-3/4">
            {cartItems.map((item) => (
              <div
                className="flex justify-between items-center border-b py-5 px-10"
                key={item.id}
              >
                <div className="flex items-center">
                  <Link to="/products">
                    <img
                      src={item.image}
                      className="h-16 w-16 object-cover mr-5"
                      alt={item.product}
                    />
                  </Link>
                  <div>
                    <p className="text-sm font-bold">{item.model}</p>
                    <h3 className="text-lg font-semibold">{item.product}</h3>
                    <p className="text-sm font-bold">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="font-semibold">
                  ₹{item.price} * {item.quantity}
                </p>
                <button
                  className="text-green-600 hover:text-green-800 p-2 border font-semibold"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/4 md:ml-5">
            <div className="border p-10 mt-5 md:mt-0">
              <p className="text-xl font-semibold">Order Summary</p>
              <p className="text-xl font-semibold">Total: ₹{subTotal}</p>
              <Link to="/payment">
                <button className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 mt-4 w-full">
                  Proceed to Payment
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
