import React, { Component } from 'react'
import '../../bootstarp.css'
import TodoDataService from '../todo/TodoDataService'
import Authservice from './authService'
import moment from 'moment'

class Todocomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: ''
        }
        this.addTodoClicked=this.addTodoClicked.bind(this)
    }
    componentDidMount() {
        this.refreshTodos();
    }
    refreshTodos = () => {
        let username = Authservice.getUserLoggedInUserName()
        TodoDataService.getTodos(username)
            .then(response => {
                this.setState({ todos: response.data })
            }
            ).catch(error => console.log(error))
    }


    deleteTodoClicked = (id) => {
        let username = Authservice.getUserLoggedInUserName()
        // console.log("deleted" ,username);
        TodoDataService.deleteTodos(username, id)
            .then(response => {
                this.setState({ message: `Delete of todo ${id} completed ` })
                this.refreshTodos();
            })
    }
    updateTodoClicked=(id)=>{
        console.log('updateclicked',id)
      this.props.history.push(`/todo/${id}`);
    }
   addTodoClicked(id){
    this.props.history.push(`/todo/-1`);
   }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {/* {this.state.message!= null && <div className="alert alert-success">{this.state.message}</div>} */}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th >Description</th>
                                <th >status</th>
                                <th >date</th>
                                <th >Update</th>
                                <th >Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id} >
                                        <td >{todo.description}</td>
                                        <td >{todo.done.toString()}</td>
                                        <td >{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td ><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td ><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className="row">
                            <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Todocomponent;