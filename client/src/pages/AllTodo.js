import React from "react";
import { useOutletContext } from "react-router-dom";
import TodoItem from "../components/TodoItem";

const AllTodo = () => {
  const { items } = useOutletContext();
  return (
    <>
      {items.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
    </>
  );
};

export default AllTodo;
