import React, { Component } from 'react'
import '../../bootstarp.css'

class Todocomponent extends Component {
    constructor(props){
    super(props)
this.state={
    todos:[{id:1, done:'false',description:'Hello',targetDate : new Date()},
    {id:2, description:'hi', done:'false', targetDate :new Date()},
    {id:3, description:'vignesh', done:'false', targetDate :new Date()},
    {id:4, description:'elangovan', done:'false',targetDate : new Date()}]
}}
    render() {
        return (
           <div>
                <h1>Todo List</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>status</th>
                            <th>date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo=>
                            <tr>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                       )
                       }
                          
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}
export default Todocomponent;