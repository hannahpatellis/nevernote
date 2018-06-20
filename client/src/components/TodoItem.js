import React from "react"

const TodoItem = props => (
    <div className="row">
        <div className="col-1">
            <div className="row">
                <input type="checkbox" />
            </div>
            <div className="row">
                X
            </div>
        </div>
        <div className="col-10">
            <div className="row">
                <h3>Todo</h3>
            </div>
            <div className="row">
                <small className="text-danger">Deadline</small>
            </div>
        </div>
        <div className="col-1">
            Note
        </div>
    </div>
)

export default TodoItem