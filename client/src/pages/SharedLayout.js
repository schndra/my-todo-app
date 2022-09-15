import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useRef } from "react";
// import dummyData from "../data";

const getLocalStorage = () => {
  let list = localStorage.getItem("items");
  if (list) {
    if (list) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  }
};

const SharedLayout = () => {
  const [items, setItems] = useState(getLocalStorage());
  const [title, setTitle] = useState("");
  const refContainer = useRef(0);

  // const todoCompleted = (id) => {
  //   const completedTodo = items.find((item) => item.id === id);
  //   const newObj = { ...completedTodo, completed: true };
  //   setItems([...items, newObj]);
  //   console.log(items);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: uuidv4(), title, completed: false };
    setItems([...items, newTodo]);
    setTitle("");
    // console.log(newTodo);
    // console.log(items);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // all toDo count
  // useEffect(() => {
  //   // refContainer.todo = items.filter((item) => item.completed === false).length;
  //   // refContainer.allTodo = items.length;
  //   // refContainer.completedTodo = items.filter(
  //   //   (item) => item.completed === true
  //   // ).length;
  //   // console.log(refContainer);

  // }, [items]);

  return (
    <>
      <section className="bg-main rounded-md  mt-8 mx-auto w-vw sm:w-fixed  py-4 drop-shadow-lg">
        <h1 className="font-head text-cardHeadline text-center ">To-Do List</h1>
        <form className="px-4" onSubmit={handleSubmit}>
          <div className="text-center my-4 ">
            <input
              type="text"
              id="title"
              name="title"
              className="w-3/4 border border-gray-300 rounded-md mr-3 px-2 py-1 font-body text-cardhead "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="bg-primary font-body font-black  text-buttonTxt rounded-lg px-2  hover:bg-tertiary  ">
              create
            </button>
          </div>
        </form>
        <Navbar refContainer={refContainer} />
        <Outlet context={{ items, setItems, refContainer }} />
      </section>
    </>
  );
};

export default SharedLayout;
