import React, { Component } from "react"

import TodoItem from "../components/TodoItem"

class List extends Component {
    state = {

    }

    render() {
        return (
            <div className="container">
                <div className="col-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Add a todo" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Add</button>
                        </div>
                    </div>

                    <TodoItem />

                </div>
            </div>
        )
    }
}

export default List