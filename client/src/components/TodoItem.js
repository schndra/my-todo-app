import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";

const TodoItem = (props) => {
  const { id, title } = props;

  return (
    <>
      <li className="list-none flex items-center mt-2 px-2">
        <button type="button" className="mr-2">
          {/* if completed true make the check box text-primary */}
          <FaCheckSquare className="text-gray-400 hover:animate-pulse hover:scale-125" />
        </button>
        <div className="flex w-vw justify-between ">
          <p className="text-cardPara">{title}</p>
          <button type="button">
            <FaTrash className="text-primary hover:animate-bounce" />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
