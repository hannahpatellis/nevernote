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
                Todo
            </div>
            <div className="row">
                Deadline
            </div>
        </div>
        <div className="col-1">
            Note
        </div>
    </div>
)

export default TodoItem