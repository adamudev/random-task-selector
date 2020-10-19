import React from "react";

const Task = (props) => {
  return (
    <div>
      Task: {props.taskList}
      <button
        onClick={(e) => {
          props.handleRemoveTask(props.taskList);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Task;
