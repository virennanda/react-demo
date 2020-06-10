import React, { Component } from "react";
class Counter extends Component {
  componentDidMount() {
    const { startNumber } = this.props;

    this.setState({ startNumber: startNumber || 1 });
  }

  handleClick = () => {
    let { startNumber } = this.state;
    startNumber = startNumber - 1;
    this.setState({ startNumber: startNumber });
  };

  state = {};
  render() {
    return (
      <div className="p-2 bg-warning">
        <button onClick={this.handleClick} className="btn btn-primary m-1">
          -
        </button>
        <span>{this.state.startNumber || 0}</span>
        <button className="btn btn-primary m-1">+</button>
      </div>
    );
  }
}

export default Counter;
