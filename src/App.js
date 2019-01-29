import React, { Component } from "react";
import "./App.css";

export default class TodoList extends Component {
  state = {
    term: "",
    items: [],
    completed: false,
    active: false
  };
  onChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.term === "") {
      alert("Cannot accept an empty field, please add a task.");
      return null;
    }
    let itemToAdd = {
      isDone: false,
      term: this.state.term
    };
    this.setState({
      term: "",
      items: [...this.state.items, itemToAdd]
    });
  };
  toggleClass = item => {
    this.setState(state => {
      state.items[item].isDone = !state.items[item].isDone;
      return state;
    });
  };
  isCompleted = () => {
    if (this.state.completed === true) {
      return this.state.item.length - 1;
    }
    this.setState({
      completed: this.state.completed
    });
  };
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              value={this.state.term}
              onChange={this.onChange}
              placeholder="Add a task"
            />
            <button type="submit">Add</button>
          </form>
          {this.state.items.length} remaining out of {this.state.items.length}{" "}
          tasks
        </div>
        <ul>
          {this.state.items.map((item, index) => (
            <li
              className={item.isDone ? "is-done" : ""}
              onClick={() => this.toggleClass(index)}
              key={index}
            >
              {item.term}
            </li>
          ))}
        </ul>
        <style>
          {`
            .is-done {
                text-decoration: line-through;
                  }
                  ul {
                      list-style: none;
                  }
                  li {
                      font-size: 2rem;
                  }
                  button {
                      background: green;
                      color: white;
                      border: none;
                      font-size: 1.1rem;
                      margin: 5px 0 0 2px;
                  }
              `}
        </style>
      </div>
    );
  }
}
