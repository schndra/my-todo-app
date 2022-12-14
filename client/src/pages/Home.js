import React from "react";
import { useOutletContext } from "react-router-dom";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const { items } = useOutletContext();
  const homeItems = items.filter((item) => item.completed === false);

  if (items.length === 0) {
    return (
      <div className="w-3/4 h-2 bg-tertiary rounded-2xl mx-auto mt-5 animate-bounce"></div>
    );
  }

  return (
    <>
      {homeItems.map((item) => {
        return <TodoItem key={item._id} {...item} />;
      })}
    </>
  );
};

export default Home;
