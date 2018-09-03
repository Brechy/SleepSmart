import React, { Component } from 'react';
import './App.css';

import DashboardGrid from './Components/DashboardGrid.jsx'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <DashboardGrid />
      </div>
    );
  }
}

export default App;
