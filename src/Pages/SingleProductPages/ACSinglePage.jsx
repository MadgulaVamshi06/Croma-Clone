import React, { useContext, useState } from "react";
import { acData } from "../../data/ac";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import ProductNavbar from "../../components/ProductNavbar";

const AcSinglePage = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = acData.find((item) => item.id === id);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAddedToCart(true);
  };

  return (
    <div>
      <div>
        <ProductNavbar/>
      </div>
      <div className="bg-black ">
        {/* Product info */}
        <div className="flex flex-col lg:flex-row mx-auto  max-w-2xl px-4 pb-16 pt-10 sm:px-6">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={product.image}
              alt={product.model}
              className="w-full h-auto object-cover object-center rounded-lg"
            />
          </div>

          {/* Product details */}
          <div className="w-full lg:w-1/2 px-4">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
              {product.company} - {product.model}
            </h1>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
              {product.product}
            </h1>

            <p className="text-base text-white mt-6">{product.description}</p>
            <br />
            <p className="text-3xl tracking-tight text-white">
              ₹{product.price}
            </p>
            <br />
            {/* Add to cart */}
            <div className="mt-10">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 "
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {isAddedToCart && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-black opacity-75"></div>
              </div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Product added to cart!
                    </h3>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={() => setIsAddedToCart(false)}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcSinglePage;
