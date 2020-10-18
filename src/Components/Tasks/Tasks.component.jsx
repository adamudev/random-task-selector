import React from "react";
import Task from "./Task.component";

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClearTask}>Clear all Task</button>
        {this.props.tasks.map((task) => (
          <Task key={task} taskList={task} />
        ))}
      </div>
    );
  }
}

export default Tasks;
