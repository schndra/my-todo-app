import React from "react";
import { useOutletContext } from "react-router-dom";

import TodoItem from "../components/TodoItem";

const CompletedTodo = () => {
  const { items } = useOutletContext();
  const completedItems = items.filter((item) => item.completed === true);

  if (items.length === 0) {
    return (
      <div className="w-3/4 h-2 bg-tertiary rounded-2xl mx-auto mt-5 animate-bounce"></div>
    );
  }

  return (
    <>
      {completedItems.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
    </>
  );
};

export default CompletedTodo;
