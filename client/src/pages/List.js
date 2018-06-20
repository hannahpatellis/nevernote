import React, { Component } from "react"

import TodoItem from "../components/TodoItem";

import API from "../utils/API";

class List extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        API.getTodos()
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="row">





                    <div className="col-sm-6 offset-sm-3 col-xs-12 mt-5">
                        <ul class="list-group mb-5">
                            <li class="list-group-item">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Add a todo" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Add</button>
                                    </div>
                                </div></li>
                            <li class="list-group-item mb-3">
                                {this.state.todos.map(item => (
                                    <TodoItem
                                        key={item._id}
                                        id={item._id}
                                        todo={item.todo}
                                        deadline={item.deadline}
                                        category={item.category}
                                        completed={item.completed}
                                    />
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default List