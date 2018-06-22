import React, { Component } from "react"

import TodoItem from "../components/TodoItem";

import API from "../utils/API";

class List extends Component {
    state = {
        todos: [],
        newtodo: ""
    };

    // This will run when the page first loads. componentDidMount is built into React.
    componentDidMount() {
        this.getTodos();
    };

    // loadTodos = () => {
    //     API.getTodos()
    //         .then(res => this.setState({ todos: res.data }))
    //         .catch(err => console.log(err));
    // };

    /* We need a method that will handle changes (the user typing)
       from the "Add to do" input field and store what they type in
       a property named after the name of the input field in the state.
    */
    handleInputChange = event => {
        /* Deconstruct name and value properties from the incoming event object
           This makes two new variables, name and value, that equal the name
           of the input field and the value of (what's being typed in) the input
           field, respectively.
        */
        const { name, value } = event.target;
        /* Here we set the state in the current constructor to the value of the name
           variable (so if name = "newtodo" then we're setting the state property
           newtodo) to the value variable made above.

           Remember, when we set the state, the page rerenders. This will keep updating
           the state as the user types a new to do into the field.
        */
        this.setState({
            [name]: value
        });
    };

    /* We need a method that will handle the action we want to preform when
       the user hits the "Add" button next to the "Add new to do" input field.

       We're going to make an API call using out API util to make a POST
       request to submit the new to do that's trying to be added to the database via
       our Express backend.

       See utils/API to see what's going on here.
    */
    handleFormSubmit = event => {
        // Prevent the page from reloading when the button is pressed
        event.preventDefault();

        /* Use API.createNewTodo to submit a new todo. We need to make
           an object to store the todo in first because createNewTodo()
           only takes one paramater.
        */
        const todoToSubmit = {
            todo: this.state.newtodo
        };
        API.createNewTodo(todoToSubmit)
            // After we use createNewTodo to send our new to do, we want to clear the newtodo state and then reload the todos
            .then(result => {
                this.setState({ newtodo: "" });
                this.getTodos();
            })
            .catch(err => console.log(err));
    };

    getTodos = () => {
        API.getTodos()
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err));
    };

    deleteTodo = id => {
        API.deleteTodo(id)
            .then(result => {
                this.getTodos();
            })
            .catch(err => console.log(err));
    };

    // render() holds what actually renders to the page. It is built into React.
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3 col-xs-12 mt-5">
                        <ul class="list-group mb-5">
                            <li class="list-group-item">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Add a to do" value={this.state.newtodo} onChange={this.handleInputChange} name="newtodo" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" onClick={this.handleFormSubmit}>Add <i className="ml-2 fas fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item mb-3">
                                {this.state.todos.map((item, i) => (
                                    <TodoItem
                                        key={item._id}
                                        id={item._id}
                                        todo={item.todo}
                                        deadline={item.deadline}
                                        category={item.category}
                                        completed={item.completed}
                                        deleteTodo={this.deleteTodo}
                                    />
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}

export default List;