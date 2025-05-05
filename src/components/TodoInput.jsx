import React, { useState } from "react";
import addIcon from "../assets/images/plus.svg";

const TodoInput = ({ handleAddButton }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <form action="">
        <label>
          <div className="flex justify-between mt-10">
            <input
              type="text"
              value={inputValue}
              placeholder="Add Task"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className="flex-1 border-b outline-0 p-1"
            />
            <button
              onClick={(e) => {
                console.log(e.preventDefault());
                handleAddButton(inputValue);
                setInputValue("");
              }}
              className="mx-2 cursor-pointer"
            >
              <img src={addIcon} alt="" />
            </button>
          </div>
        </label>
      </form>
    </>
  );
};

export default TodoInput;
