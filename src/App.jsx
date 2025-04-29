import "./App.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

const todos = [
  {
    id: crypto.randomUUID(),
    title: "Learn MySQL database",
    desscription: "",
    completed: false
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
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: "Do some exercise",
    desscription: "",
    completed: false
  }
]

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Main todos={todos}/>
      </div>
    </>
  );
}

export default App;
