import React from "react";
import Task from "./Task.component";

const Tasks = (props) => {
  return (
    <div>
      <button onClick={props.handleClearAllTasks}>Clear all Task</button>
      {props.tasks.map((task) => (
        <Task
          key={task}
          taskList={task}
          handleRemoveTask={props.handleRemoveTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
