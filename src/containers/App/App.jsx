import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./../../router"
class App extends Component {
  componentDidMount() {

  }

  render() {


    return (
      <Router>
<Routes />
      </Router>
    );
  }
}

export default App;
