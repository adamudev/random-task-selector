import React from "react";
import Header from "./Components/Header/Header.component";
import Tasks from "./Components/Tasks/Tasks.component";
import AddTask from "./Components/Tasks/AddTask.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  handleClearTask = () => {
    this.setState(() => {
      return {
        tasks: [],
      };
    });
  };

  handlePickTask = () => {
    const randomPick = Math.floor(Math.random() * this.state.tasks.length);
    const tasks = this.state.tasks[randomPick];
    alert(tasks);
  };

  handleAddTask = (task) => {
    if (!task) {
      return "Enter valid value to add item";
    } else if (this.state.tasks.indexOf(task) > -1) {
      return "The task already exist";
    }

    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task),
      };
    });
  };

  render() {
    const title = "Random Task Selector";
    return (
      <div>
        <Header
          title={title}
          hasTasks={this.state.tasks.length > 0}
          handlePickTask={this.handlePickTask}
        />
        <Tasks
          tasks={this.state.tasks}
          handleClearTask={this.handleClearTask}
        />
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}

export default App;
