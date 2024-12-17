import React from "react";
import TaskInput from "./components/Taskinput";
import Filters from "./components/Filters";
import TaskList from "./components/Tasklist";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Task Manager
      </h1>
      <TaskInput />
      <Filters />
      <TaskList/>
    </div>
  );
};

export default App;
