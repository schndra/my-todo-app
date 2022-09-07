import React from "react";
import { useOutletContext } from "react-router-dom";
import TodoItem from "../components/TodoItem";

const CompletedTodo = () => {
  const { items } = useOutletContext();

  return (
    <>
      {items.map((item) => {
        if (item.completed === true) {
          return <TodoItem key={item.id} {...item} />;
        }
      })}
    </>
  );
};

export default CompletedTodo;
