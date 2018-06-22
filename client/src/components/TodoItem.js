import React from "react";

const TodoItem = props => (
    <div>
        <div className="row ml-1 mr-1">
            <div className="col-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" name={props.id} />
                        </div>
                    </div>
                    <h2 className="form-control">{props.todo}</h2>
                </div>
            </div>
        </div>

        <div className="row mb-3">
            <div className="offset-1 col-7">
                {props.deadline && (
                    <small>
                        <span className="text-danger"><i className="far fa-clock mr-2"></i> {props.deadline}</span>
                    </small>
                )}
            </div>
            <div className="offset-1 col-2">
                <small>
                    <span className="text-black-50">
                        <i className="far fa-sticky-note mr-3"></i>
                    </span> 
                    <span className="primary" onClick={() => props.deleteTodo(props.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </small>
            </div>
        </div>
        <hr />
    </div>
);

export default TodoItem;