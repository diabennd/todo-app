import TodoList from "./TodoList";

const Main = ({ todos }) => {
  return (
    <div className="m-4">
      <div className="header">
        <h1 className="text-5xl font-extrabold">TASKS</h1>
      </div>
      <div className="mt-[50px]">
        <TodoList tasks={todos} />
      </div>
    </div>
  );
};

export default Main;
