import { useEffect, useState } from "react";
import shortid from "shortid";
import Layout from "../components/layout/Layout";
import CreateTasks from "../components/tasks/CreateTasks";
import DeleteTasks from "../components/tasks/DeleteTasks";
import ShowTasks from "../components/tasks/ShowTasks";

// // get Data form the localStorage:
function getDataFromLocalStorage() {
  const data = localStorage.getItem("tasks");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function Tasks() {
  const [tasks, setTasks] = useState(getDataFromLocalStorage());
  const [visibility, setVisibility] = useState("all");

  //   add new Task:
  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date().toLocaleDateString("en-us"),
      id: shortid.generate(),
    };

    // update the state:
    setTasks([task, ...tasks]);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  //   set to the localStorage:
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Layout>
      <h1>All Tasks</h1>
      <CreateTasks addNewTask={addNewTask} />
      <ShowTasks tasks={tasks} setTasks={setTasks} />

      <DeleteTasks deleteAllTasks={deleteAllTasks} />
    </Layout>
  );
}

export default Tasks;
