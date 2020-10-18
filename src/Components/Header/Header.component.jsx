import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button
          onClick={this.props.handlePickTask}
          disabled={!this.props.hasTasks}
        >
          Pick a Task
        </button>
      </div>
    );
  }
}

export default Header;
