import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    // TODO: Pull the list from a server
    this.state = {
      toDoList: [
        "Wake up",
        "Coffee",
        "Make eggs",
        "Call tech support",
      ],
    };
  }

  render() {
    const { toDoList } = this.state;

    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="App-header">
          <h2>Big Fish</h2>
          <h3>Customer Relationship Management</h3>
          <SearchBar maxlength="2048"></SearchBar>
        </div>
        <p className="App-intro">
          This is an application designed to accept an item to do. After completing the item to do, a user may check the item as done.
        </p>
        <ToDoList aList={toDoList} />
      </div>
    );
  }
}

export default App;
