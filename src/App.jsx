import "./App.css";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";
import { useState } from "react";

const todoList = [
  {
    id: crypto.randomUUID(),
    title: "Learn MySQL database",
    desscription: "",
    checked: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Learn ReactJS",
    desscription: "",
    checked: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Learn other frameworks",
    desscription: "",
    checked: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Take a nap",
    desscription: "",
    checked: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Do some exercise",
    desscription: "",
    checked: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todoList);
  const [menu, setMenu] = useState("All");

  function handleAddButton(title, description = "") {
    const newList = [
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        description: description,
        checked: false,
      },
    ];
    setTodos(newList);
  }

  function handleCheckbox(id) {
    const listTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
    });

    setTodos(listTodos);
  }

  function handleDelete(id) {
    const listTodos = todos.filter((todo) => !(todo.id === id));
    console.log(id)
    setTodos(listTodos);
  }

  return (
    <>
      <div className="flex">
        <SideBar setMenu={setMenu} />
        <MainPage
          todos={todos}
          menu={menu}
          handleAddButton={handleAddButton}
          handleCheckbox={handleCheckbox}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
