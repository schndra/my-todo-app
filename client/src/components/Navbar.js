import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">todo(0)</Link>
      <Link to="/completed">complted(0)</Link>
      <Link to="/all">All(0)</Link>
    </>
  );
};

export default Navbar;
