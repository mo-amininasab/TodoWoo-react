import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dropdownActions } from "../../store/dropdownSlice";

function Dropdown() {
  const isDropdownOpen = useSelector((state) => state.dropdown.isOpen);
  const dispatch = useDispatch();

  const dropdownHandler = () => {
    dispatch(dropdownActions.dropdownHandler());
  };

  return (
    <>
      {isDropdownOpen && (
        <div className="flex flex-col md:hidden bg-gray-900">
          <NavLink
            to="/current"
            activeClassName="border-l-8 border-blue-800"
            className="bg-gray-900 text-white px-3 py-2"
            onClick={dropdownHandler}
          >
            Current
          </NavLink>
          <NavLink
            to="/completed"
            activeClassName="border-l-8 border-green-800"
            className="bg-gray-900 text-white px-3 py-2"
            onClick={dropdownHandler}
          >
            Completed
          </NavLink>
          <NavLink
            to="/create"
            activeClassName="border-l-8 border-purple-800"
            className="bg-gray-900 text-white px-3 py-2"
            onClick={dropdownHandler}
          >
            Create
          </NavLink>

          <NavLink
            to="/login"
            className="text-gray-300 px-3 py-2 font-medium text-sm pb-3"
            onClick={dropdownHandler}
          >
            Login
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Dropdown;
