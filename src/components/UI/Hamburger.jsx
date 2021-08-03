import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropdownActions } from "../../store/dropdownSlice";

function Hamburger() {
  const isOpenDropdown = useSelector((state) => state.dropdown.isOpen);
  const dispatch = useDispatch();

  const dropdownHandler = () => {
    dispatch(dropdownActions.dropdownHandler());
  };

  return (
    <div className="md:hidden cursor-pointer" onClick={dropdownHandler}>
      {!isOpenDropdown ? (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </div>
  );
}

export default Hamburger;
