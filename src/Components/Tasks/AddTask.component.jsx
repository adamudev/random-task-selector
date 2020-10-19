import React from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
  }

  handleAddTask = (e) => {
    e.preventDefault();

    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddTask(task);
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.handleAddTask}>
          <input type="text" name="task" />
          <button>Add a Task</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
