import "./App.css";

import InputBox from "./Components/InputBox";
import TotalTime from "./Components/TotalTime";
import EntryList from "./Components/EntryList";
import BadList from "./Components/BadList";
import { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([]);

  const getTotalTime = (array) => {
    return array.reduce((total, item) => {
      return total + item.time;
    }, 0);
  };

  const toggleTaskType = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isGood: !task.isGood } : task
      )
    );
  };

  const getBadTaskTime = () => {
    let badTasks = tasks.filter((task) => !task.isGood);
    return getTotalTime(badTasks);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleChecked = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  console.log(tasks);

  return (
    <>
      <div className="min-h-screen flex flex-col w-full items-center gap-10 px-12 py-10 bg-gradient-to-t from-[#22C1C3] to-[#FDBB2D]">
        {/* title */}
        <div>
          <h1 className="text-4xl font-bold text-center">NOT TO DO LIST</h1>
        </div>
        {/* Input Box */}
        <InputBox setTasks={setTasks} />
        <div className="grid grid-cols-12 gap-4 w-full">
          <EntryList
            datas={tasks}
            toggleTaskType={toggleTaskType}
            deleteTask={deleteTask}
            handleChecked={handleChecked}
          />
          <BadList
            datas={tasks}
            toggleTaskType={toggleTaskType}
            getBadTaskTime={getBadTaskTime}
            deleteTask={deleteTask}
            handleChecked={handleChecked}
          />
        </div>

        <TotalTime getTotalTime={getTotalTime} datas={tasks} />
      </div>
    </>
  );
}

export default App;
