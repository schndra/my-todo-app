import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const TodoItem = (props) => {
  const { id, title } = props;
  return (
    <>
      <li className="list-none flex items-center mt-2 px-2">
        <button type="button" className="mr-2">
          <FaRegEdit className="text-primary" />
        </button>
        <div className="flex w-vw justify-between ">
          <p className="text-cardPara">{title}</p>
          <button type="button">
            <FaTrash className="text-primary" />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
