import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    console.log(data);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
    <div className=" container flex flex-row mx-auto justify-center">
    <div
      className=" bg-slate-200 p-3 rounded-lg shadow-lg px-10 my-2 hover:cursor-pointer  flex w-[80%] justify-between mx-auto"
    >
      <h3 className="font-bold text-xl flex mx-6">Title</h3>
      <p className="flex mx-6">Description</p>
      <p  className="flex mx-6">User</p>
    </div>
    </div>
      {tasks.map((task:any) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};

export default TasksList;
