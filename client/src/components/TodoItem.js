import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

const TodoItem = (props) => {
  const { id, title, completed } = props;
  const {} = useOutletContext();

  return (
    <>
      <li className="list-none flex items-center mt-2 px-2">
        <button type="button" className="mr-2">
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
          <button type="button">
            <FaTrash className="text-primary hover:animate-bounce" />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
