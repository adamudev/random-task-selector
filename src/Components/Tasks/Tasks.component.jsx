import React from "react";
import Task from "./Task.component";

const Tasks = (props) => {
  return (
    <div>
      <button onClick={props.handleClearTask}>Clear all Task</button>
      {props.tasks.map((task) => (
        <Task key={task} taskList={task} />
      ))}
    </div>
  );
};

export default Tasks;
