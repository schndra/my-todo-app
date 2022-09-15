import React from "react";
import { useOutletContext } from "react-router-dom";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const { items } = useOutletContext();
  const homeItems = items.filter((item) => item.completed === false);

  return (
    <>
      {homeItems.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
    </>
  );
};

export default Home;
