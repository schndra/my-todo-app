import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { refContainer } = props;
  console.log(refContainer);

  return (
    <>
      <div className="font-head text-subHeadline capitalize flex items-center justify-center gap-16 bg-secondary h-12 ">
        <Link
          to="/"
          className=" hover:text-gray-300 hover:scale-125 hover:transition-all  "
        >
          todo({`${refContainer.todo || 0}`})
        </Link>
        <Link
          to="/completed"
          className=" hover:hover:text-gray-300  hover:scale-125 hover:transition-all "
        >
          complted({`${refContainer.completedTodo || 0}`})
        </Link>
        <Link
          to="/all"
          className="hover:text-gray-300 hover:scale-125 hover:transition-all "
        >
          All({`${refContainer.allTodo || 0}`})
        </Link>
      </div>
    </>
  );
};

export default Navbar;
