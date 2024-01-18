import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 bg-red-100">
      <div className="text-blue-500 flex items-center gap-3">
        <NavLink
          className="text-blue-600 flex items gap-3 "
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          FOOD RECIPE
        </NavLink>
      </div>
      <div className="flex gap-5 text-gray-600">
        <NavLink
          className="hover:text-blue-800 transition ease-in-out delay-100 hover:scale-125"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          ABOUT
        </NavLink>
        <a
          className="hover:text-blue-800 transition ease-in-out delay-100 hover:scale-125"
          href="https://fatih-dev-portfolio.netlify.app/"
          target="_blank"
        >
          PORTFOLIO
        </a>
        <NavLink
          className="hover:text-blue-800 transition ease-in-out delay-100 hover:scale-125"
          to="/"
        >
          LOGOUT
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
