import React from "react";

const Task = (props) => (
  <div className="task">
    {props.taskList}
    <button
      className="remove"
      onClick={(e) => {
        props.handleRemoveTask(props.taskList);
      }}
    >
      X
    </button>
  </div>
);

export default Task;
