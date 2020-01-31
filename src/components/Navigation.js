import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="text-white">
<<<<<<< HEAD
                    { this.props.title.toUpperCase() }
=======
                    Tasks
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.todos.length}
                    </span>
>>>>>>> master
                </a>
            </nav>
        );
    }
}

export default Navigation