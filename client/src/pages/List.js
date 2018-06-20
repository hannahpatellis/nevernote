import React, { Component } from "react"

import TodoItem from "../components/TodoItem"

class List extends Component {
    state = {

    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-6 offset-sm-3 col-xs-12 mt-5">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control form-control-lg" placeholder="Add a todo" />
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