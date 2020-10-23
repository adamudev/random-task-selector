import React from "react";
import Task from "./Task.component";

const Tasks = (props) => (
  <div className="tasks">
    <button className="clear" onClick={props.handleClearAllTasks}>
      Clear all Task
    </button>
    {props.tasks.length === 0 && <p className="no-task">No task available</p>}
    {props.tasks.map((task) => (
      <Task
        key={task}
        taskList={task}
        handleRemoveTask={props.handleRemoveTask}
      />
    ))}
  </div>
);

export default Tasks;
