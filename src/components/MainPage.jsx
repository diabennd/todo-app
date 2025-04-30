import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const MainPage = ({ todos, menu, handleAddButton}) => {
  function filterTask() {
    if (menu === "All") {
      return todos;
    } else if (menu === "Current") {
      return todos.filter((val) => !val.completed);
    } else if (menu === "Completed") {
      return todos.filter((val) => val.completed);
    } else {
      return;
    }
  }

  return (
    <div className="m-4">
      <div className="header">
        <h1 className="text-5xl font-extrabold">TASKS</h1>
      </div>
      <div>
        <TodoInput handleAddButton={handleAddButton}/>
      </div>
      <div className="mt-[20px]">
        <TodoList tasks={filterTask()} />
      </div>
    </div>
  );
};

export default MainPage;
