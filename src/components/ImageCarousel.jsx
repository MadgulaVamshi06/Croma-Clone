import React, { useRef, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SliderAuto = ({ children }) => {
  const contentBoxRef = useRef();
 const intervalRef = useRef();

  const scrollRight = () => {
    const scrollAmount = contentBoxRef.current.clientWidth;
    const maxScrollLeft =
      contentBoxRef.current.scrollWidth - contentBoxRef.current.clientWidth;
    contentBoxRef.current.scrollLeft += scrollAmount;
    if (contentBoxRef.current.scrollLeft >= maxScrollLeft) {
      // If reached the end, scroll back to the beginning
      contentBoxRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(scrollRight, 1500); // Scrolls every second

    return () => {
      clearInterval(intervalRef.current); // Clear interval on component unmount
    };
  }, []);

  const scrollLeft = () => {
    const scrollAmount = contentBoxRef.current.clientWidth;
    contentBoxRef.current.scrollLeft -= scrollAmount;
  };

  return (
    <div className="flex my-4">
      <button
        className="text-white text-2xl hidden md:block"
        onClick={scrollLeft}
      >
        <FaAngleLeft />
      </button>

      <div ref={contentBoxRef} className="flex overflow-x-hidden">
        {children}
      </div>

      <button
        className="text-white text-2xl hidden md:block"
        onClick={scrollRight}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default SliderAuto;
