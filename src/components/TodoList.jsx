import arrowIcon from "../assets/images/arrow-icon.svg";

const TodoList = ({ tasks }) => {
  return (
    <>
      {tasks.map((list) => {
        return (
          <div key={list.id} className="flex flex-justify-center items-center gap-4  border-t border-b border-gray-300 w-[40vw] mb-2 p-2 text-xs">
            <input type="checkbox" name="" id="completed" className="cursor-pointer"/>
            <button id="completed" className="flex flex-1 justify-start cursor-pointer">
              {list.title}
            </button>
            <button className="cursor-pointer">
              <img src={arrowIcon} alt="" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
