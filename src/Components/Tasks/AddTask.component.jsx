import React from "react";

class AddTask extends React.Component {
  state = {
    error: undefined,
  };

  handleAddTask = (e) => {
    e.preventDefault();

    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddTask(task);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.task.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.handleAddTask}>
          <input type="text" name="task" placeholder="Type new task" />
          <button className="main"> Add a Task</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
