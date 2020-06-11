import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    data: [
      {
        id: 1,
        memberName: "piyush",
        penalty: 0,
      },
      {
        id: 2,
        memberName: "viren",
        penalty: 10,
      },
    ],
  };
  handlePenaltyIncrease = (id) => {
    const { data: originalData } = this.state;
    const newData = originalData.map((item) => {
      if (item.id === id) {
        item.penalty = item.penalty + 10;
      }
      return item;
    });

    this.setState({ data: newData });
  };
  handlePenaltyDecrease = (id) => {
    const { data: originalData } = this.state;
    const newData = originalData.map((item) => {
      if (item.id === id && item.penalty > 0) {
        item.penalty = item.penalty - 10;
      }
      return item;
    });

    this.setState({ data: newData });
  };

  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <Counter
            key={item.id}
            memberId={item.id}
            memberName={item.memberName}
            penalty={item.penalty}
            onPenaltyIncrement={this.handlePenaltyIncrease}
            onPenaltyDecrement={this.handlePenaltyDecrease}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
