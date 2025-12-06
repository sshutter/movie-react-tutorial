import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const ScollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full container-fluid d-flex justify-content-center mt-5">
      <div
        className="position-fixed"
        style={{ bottom: "0px", right: "0px", padding: "20px", zIndex: 999 }}
      >
        <button
          onClick={scrollToTop}
          className="p-3 bg-dark text-white rounded-circle shadow-lg border-0"
        >
          <IoArrowUpOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default ScollUpButton;
