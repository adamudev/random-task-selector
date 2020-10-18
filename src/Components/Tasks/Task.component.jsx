import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Task: {this.props.taskList}</div>;
  }
}

export default Task;
