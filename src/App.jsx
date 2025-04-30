import "./App.css";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import { useState } from "react";

const todoList = [
  {
    id: crypto.randomUUID(),
    title: "Learn MySQL database",
    desscription: "",
    completed: true
  },
  {
    id: crypto.randomUUID(),
    title: "Learn ReactJS",
    desscription: "",
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: "Learn other frameworks",
    desscription: "",
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: "Take a nap",
    desscription: "",
    completed: true
  },
  {
    id: crypto.randomUUID(),
    title: "Do some exercise",
    desscription: "",
    completed: false
  }
]




function App() {
  const [todos, setTodos] = useState(todoList)
  const [menu, setMenu] = useState('All')

  function handleAddButton(title, description = "") {
    const newList = [
      ...todos, {
        id: crypto.randomUUID(),
        title: title,
        description: description,
        completed: false
      }
      
    ]
    setTodos(newList)
  } 
  
  function handleCheckButton() {
  }
  
  function handleShowDetail() {
    
  }

  return (
    <>
      <div className="flex">
        <SideBar setMenu={setMenu}/>
        <MainPage todos={todos} menu={menu} handleAddButton={handleAddButton}/>
      </div>
    </>
  );
}

export default App;
