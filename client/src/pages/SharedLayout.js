import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import dummyData from "../data";

const SharedLayout = () => {
  const [items, setItems] = useState(dummyData);

  return (
    <>
      <section className="bg-main rounded-md  mt-8 mx-auto w-vw sm:w-fixed  py-4 drop-shadow-lg">
        <h1 className="font-head text-cardHeadline text-center ">To-Do List</h1>
        <form className="px-4">
          <div className="text-center my-4 ">
            <input
              type="text"
              className="w-3/4 border border-gray-300 rounded-md mr-3 px-2 py-1 font-body text-cardhead "
            />
            <button className="bg-primary font-body font-black  text-buttonTxt rounded-lg px-2  hover:bg-tertiary  ">
              create
            </button>
          </div>
        </form>
        <Navbar />
        <Outlet context={{ items }} />
      </section>
    </>
  );
};

export default SharedLayout;
