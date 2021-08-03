import React from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 px-6 sm:px-12 md:px-24 lg:px-32 flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <h1 className="text-white mr-6 text-3xl font-semibold">TodoWoo</h1>
        <NavLink
          to="/current"
          activeClassName="bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium"
          className="bg-gray-900 hidden md:block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800"
        >
          Current
        </NavLink>
        <NavLink
          to="/completed"
          activeClassName="bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium"
          className="bg-gray-900 hidden md:block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
        >
          Completed
        </NavLink>
        <NavLink
          to="/create"
          activeClassName="bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium"
          className="bg-gray-900 hidden md:block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800"
        >
          Create
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/login"
          className="text-gray-300 px-3 py-2 font-medium hidden md:block text-sm rounded-md hover:bg-gray-500 hover:text-white"
        >
          Login
        </NavLink>
      </div>

      <Hamburger />
    </nav>
  );
}

export default Navbar;
