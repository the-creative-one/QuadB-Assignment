// src/App.js
import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
      <p >
        <i class="fa-solid fa-star-of-life fa-beat-fade"></i>Click on the task
        to mark as completed
      </p>
    </div>
  );
};

export default App;
