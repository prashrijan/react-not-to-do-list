import "./App.css";

import InputBox from "./Components/InputBox";
import TotalTime from "./Components/TotalTime";
import EntryList from "./Components/EntryList";
import BadList from "./Components/BadList";

function App() {
  let tasks = [
    {
      id: Date.now(),
      taskName: "Eat Food",
      time: 1,
      isGood: true,
    },
    {
      id: Date.now(),
      taskName: "Watch Tiktok",
      time: 10,
      isGood: true,
    },
    {
      id: Date.now(),
      taskName: "Take Shower",
      time: 1,
      isGood: true,
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col w-full items-center gap-10 px-12 py-10 bg-gradient-to-t from-[#22C1C3] to-[#FDBB2D]">
        {/* title */}
        <div>
          <h1 className="text-4xl font-bold text-center">NOT TO DO LIST</h1>
        </div>
        {/* Input Box */}
        <InputBox />
        <div className="grid grid-cols-12 gap-4 w-full">
          <EntryList datas={tasks} />
          <BadList datas={tasks} />
        </div>

        <TotalTime />
      </div>
    </>
  );
}

export default App;
