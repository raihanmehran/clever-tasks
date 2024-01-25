import { useState, useEffect } from "react";
import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Task1",
      description: "Task 1 description",
    },
    {
      title: "Task1",
      description: "Task 1 description",
    },
    {
      title: "Task1",
      description: "Task 1 description",
    },
    {
      title: "Task1",
      description: "Task 1 description",
    },
  ]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/tasks").then(async function (res) {
  //     const json = await res.json();
  //     setTasks(json.tasks);
  //     console.log(tasks);
  //     console.log(json.tasks);
  //   });
  // });

  return (
    <>
      <CreateTask />
      <Tasks tasks={tasks}></Tasks>
    </>
  );
}

export default App;
