import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import TodoDataService from './TodoDataService'
import Authservice from '../todo/authService'
class updateTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }
    onSubmit(values) {
        console.log(values, 'form updated');
        let username = Authservice.getUserLoggedInUserName()
        let todo = {
            id: this.state.id,
            username:username,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id === -1) {
            TodoDataService.addTodos(username, todo
            ).then(() => this.props.history.push('/todo'))
        } else {
            console.log('vignesh put request check', values);
            TodoDataService.updateTodos(username, this.state.id, todo
            ).then(() => this.props.history.push('/todo'))
        }
    }
    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Please Enter Description'
        } else if (values.description.length < 5) {
            errors.description = 'Please enter more than 5 characters'
        }
        return errors
    }
    componentDidMount() {
        if (this.state.id === -1) {
            return
        } else {
            let username = Authservice.getUserLoggedInUserName()
            TodoDataService.getTodo(username, this.state.id)
                .then(response => this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                }))
        }
    }
    render() {
        let { description, targetDate } = this.state

        return (
            <div>
                <h1>Todos</h1>
                <Formik
                    initialValues={{ description, targetDate }}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnChange={false}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />

                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit" >update</button>
                            </Form>)
                    }
                </Formik>

                <div>Update Todo for id {this.props.match.params.id}</div>
            </div>)
    }
}
export default updateTodo;