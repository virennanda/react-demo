import React, { Component } from "react";
import Counters from "./component/counters";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Counters />
      </React.Fragment>
    );
  }
}

export default App;
