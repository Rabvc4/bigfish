import React, { Component } from 'react';
import './SearchBar.css';

  class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A search was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form className="Search-Area" onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input className="Search-Bar" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <div className="Search-FlavorText">Type in the textbox and hit "ENTER" to search</div>
        </form>
      );
    }
  }

export default SearchBar;
