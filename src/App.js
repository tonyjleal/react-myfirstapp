import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import { todos } from './todos.json'
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handlAddTask = this.handlAddTask.bind(this);
  }

  handlAddTask(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTask(index){
    if(window.confirm('Are you sure you want to delete it?')) {
      this.setState({
          todos: this.state.todos.filter((e, i) => {
              return i !== index
          })
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ todo.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <mark>{todo.responsable}</mark> 
            </div>
            <div className="card-footer">
                <button className="btn btn-danger"
                onClick={this.removeTask.bind(this, i)}>
                  Delete
                </button>
            </div>
          </div>
        </div>
      );
    })
    return (
      <div className="App">
          <Navigation todos={this.state.todos} />
          <div className="container">
            <div className="row mt-4">
                <div className="col-md-4 text-center">
                  <TodoForm onAddTask={this.handlAddTask}/> 
                </div>
                <div className="col-md-8">
                  <div className="row">
                    { todos }
                  </div>
                </div>
              </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
