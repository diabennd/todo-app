import arrowIcon from "../assets/images/arrow-icon.svg";

const TodoList = ({ tasks }) => {
  return (
    <>
      {tasks.map((list) => {
        return (
          <div className="flex flex-justify-center items-center gap-4 border-t border-b border-gray-300 w-[40vw] mb-2 p-2 text-xs">
            <input type="checkbox" name="" id="completed" />
            <button id="completed" className="flex flex-1 justify-start">
              {list.title}
            </button>
            <button>
              <img src={arrowIcon} alt="" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
