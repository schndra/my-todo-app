import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="font-head text-subHeadline capitalize flex items-center justify-center gap-16 bg-secondary h-12 ">
        <Link
          to="/"
          className=" hover:text-gray-300 hover:scale-125 hover:transition-all  "
        >
          todo(0)
        </Link>
        <Link
          to="/completed"
          className=" hover:hover:text-gray-300  hover:scale-125 hover:transition-all "
        >
          complted(0)
        </Link>
        <Link
          to="/all"
          className="hover:text-gray-300 hover:scale-125 hover:transition-all "
        >
          All(0)
        </Link>
      </div>
    </>
  );
};

export default Navbar;
