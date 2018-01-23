import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'Pablo' 
  }

  handler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <UserInput 
        changed = {this.handler}
        userName = {this.state.username} />
        
        <UserOutput userName = 'juan'/>
        <UserOutput userName = {this.state.username}/>
      </div>
    );
  }
}

export default App;
