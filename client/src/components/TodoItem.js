import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

const TodoItem = (props) => {
  const { completedTodo, removeTodo } = useOutletContext();
  const { id, title, completed } = props;

  return (
    <>
      <li className="list-none flex items-center mt-2 px-2">
        <button
          type="button"
          className="mr-2"
          onClick={() => completedTodo(id)}
        >
          {/* if completed true make the check box text-primary */}
          <FaCheckSquare
            className={`${
              !completed
                ? `text-gray-400 hover:animate-pulse hover:scale-125`
                : `text-primary hover:animate-pulse hover:scale-125`
            }`}
          />
        </button>
        <div className="flex w-vw justify-between ">
          <p
            className={`${
              !completed ? "text-cardPara" : `text-cardPara line-through`
            }`}
          >
            {title}
          </p>
          <button
            type="button"
            onClick={() => removeTodo(id)}
            className="hover:animate-bounce duration-500"
          >
            <FaTrash className="text-primary " />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
