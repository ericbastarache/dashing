import React, { Component } from 'react';
import ActivityFeed from 'containers/ActivityFeed';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ActivityFeed />
      </React.Fragment>
    );
  }
}

export default App;
