import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const MainPage = ({ todos, menu, handleAddButton, handleCheckbox, handleDelete}) => {
  function filterTask() {
    if (menu === "All") {
      return todos;
    } else if (menu === "Current") {
      return todos.filter((val) => !val.checked);
    } else if (menu === "Completed") {
      return todos.filter((val) => val.checked);
    } else {
      return;
    }
  }

  return (
    <div className="m-4 w-[50%]">
      <div className="header">
        <h1 className="text-5xl font-extrabold">TASKS</h1>
      </div>
      <div>
        <TodoInput handleAddButton={handleAddButton} />
      </div>
      <div className="mt-[20px]">
        <ul>
          <TodoList tasks={filterTask()} handleCheckbox={handleCheckbox} handleDelete={handleDelete}/>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
