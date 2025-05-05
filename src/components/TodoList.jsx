import deleteIcon from "../assets/images/delete.svg";

const TodoList = ({ tasks, handleCheckbox, handleDelete }) => {
  return (
    <>
      {tasks.map((list) => {
        return (
          <li
            key={list.id}
            className="flex flex-justify-center items-center w-full gap-4  border-t border-b border-gray-300 mb-2 p-2 text-s"
          >
            <input
              type="checkbox"
              name=""
              id="completed"
              onChange={() => handleCheckbox(list.id)}
              checked={list.checked}
              className="cursor-pointer"
            />
            <button
              id="completed"
              className="flex flex-1 justify-start cursor-pointer"
            >
              {list.title}
            </button>
            <button className="cursor-pointer" onClick={() => handleDelete(list.id)}>
              <img src={deleteIcon} alt="" />
            </button>
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
