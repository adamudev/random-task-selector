import React from "react";
import Header from "./Components/Header/Header.component";
import Tasks from "./Components/Tasks/Tasks.component";
import AddTask from "./Components/Tasks/AddTask.component";
import TaskModal from "./Components/TaskModal/TaskModal";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [],
    chosenTask: undefined,
  };

  handleClearAllTasks = () => {
    this.setState(() => ({ tasks: [] }));
  };

  handleRemoveTask = (removeTask) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => removeTask !== task),
    }));
  };

  handlePickTask = () => {
    const randomPick = Math.floor(Math.random() * this.state.tasks.length);
    const task = this.state.tasks[randomPick];
    this.setState(() => ({
      chosenTask: task,
    }));
  };

  handleAddTask = (task) => {
    if (!task) {
      return "Enter valid value to add item";
    } else if (this.state.tasks.indexOf(task) > -1) {
      return "The task already exist";
    }

    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(task),
    }));
  };
  handleClodeModal = () => {
    this.setState(() => ({ chosenTask: undefined }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("tasks");
      const tasks = JSON.parse(json);
      if (tasks) {
        this.setState(() => ({ tasks }));
      }
    } catch (error) {}
    console.log("ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem("tasks", json);
      console.log("saving data");
    }
  }

  render() {
    const title = "Random Task Selector";
    return (
      <div className="app">
        <Header
          title={title}
          hasTasks={this.state.tasks.length > 0}
          handlePickTask={this.handlePickTask}
        />
        <Tasks
          tasks={this.state.tasks}
          handleClearAllTasks={this.handleClearAllTasks}
          handleRemoveTask={this.handleRemoveTask}
        />
        <AddTask handleAddTask={this.handleAddTask} />
        <TaskModal
          chosenTask={this.state.chosenTask}
          handleClodeModal={this.handleClodeModal}
        />
      </div>
    );
  }
}

export default App;
