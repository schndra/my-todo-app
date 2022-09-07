import React from "react";
import { useOutletContext } from "react-router-dom";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const { items } = useOutletContext();
  return (
    <>
      {items.map((item) => {
        if (item.completed === false) {
          return <TodoItem key={item.id} {...item} />;
        }
      })}
    </>
  );
};

export default Home;
