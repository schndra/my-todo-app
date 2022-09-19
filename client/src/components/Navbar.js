import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { todoCount } = props;

  let activeClassName = "text-gray-300 scale-125 ";

  return (
    <>
      <div className="font-head text-subHeadline capitalize flex items-center justify-center gap-16 bg-secondary h-12 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "hover:text-gray-300 hover:scale-125 hover:transition-all"
          }
        >
          todo({todoCount.homeCount})
        </NavLink>
        <NavLink
          to="/completed"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "hover:text-gray-300 hover:scale-125 hover:transition-all"
          }
        >
          complted({todoCount.completedCount})
        </NavLink>
        <NavLink
          to="/all"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "hover:text-gray-300 hover:scale-125 hover:transition-all"
          }
        >
          All({todoCount.totalCount})
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
