import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    // console.log(e.target.value, e.target.name);
    const { value, name } = e.target;
    this.setState({
        [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
     this.props.onAddTask(this.state);
    console.log('sending data...')
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="Responsible"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
