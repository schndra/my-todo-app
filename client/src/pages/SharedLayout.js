import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
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
  const [isError, setIsError] = useState(false);
  const [todoCount, setTodoCount] = useState({
    totalCount: 0,
    completedCount: 0,
    homeCount: 0,
  });

  const refContainer = useRef(null);

  const createTodo = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:3001/api/v1/todos", {
        title: data.title,
        completed: data.completed,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/v1/todos");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setIsError(true);
    } else {
      const newTodo = { title, completed: false };
      createTodo(newTodo);
      setItems([...items, newTodo]);
      setTitle("");
      setIsError(false);
    }
  };

  const completedTodo = (id) => {
    let temp = items.map((item) => {
      if (item._id === id) {
        return { ...item, completed: true };
      }
      return item;
    });

    setItems(temp);
  };

  const removeTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/todos/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const getCounts = () => {
    const homeItems = items.filter((item) => item.completed === false);
    const completedItems = items.filter((item) => item.completed === true);
    setTodoCount({
      ...todoCount,
      homeCount: homeItems.length,
      completedCount: completedItems.length,
      totalCount: items.length,
    });
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    getCounts();
  }, [items]);

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
              ref={refContainer}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="bg-primary font-body font-black  text-buttonTxt rounded-lg px-2  hover:bg-tertiary  ">
              create
            </button>
          </div>
        </form>
        <Navbar todoCount={todoCount} />
        <Outlet context={{ items, setItems, completedTodo, removeTodo }} />
      </section>
    </>
  );
};

export default SharedLayout;
