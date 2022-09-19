import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { todoCount } = props;
  console.log(todoCount);

  return (
    <>
      <div className="font-head text-subHeadline capitalize flex items-center justify-center gap-16 bg-secondary h-12 ">
        <Link
          to="/"
          className=" hover:text-gray-300 hover:scale-125 hover:transition-all  "
        >
          todo({todoCount.homeCount})
        </Link>
        <Link
          to="/completed"
          className=" hover:hover:text-gray-300  hover:scale-125 hover:transition-all "
        >
          complted({todoCount.completedCount})
        </Link>
        <Link
          to="/all"
          className="hover:text-gray-300 hover:scale-125 hover:transition-all "
        >
          All({todoCount.totalCount})
        </Link>
      </div>
    </>
  );
};

export default Navbar;
