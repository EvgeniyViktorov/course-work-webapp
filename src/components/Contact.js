import React, {Component} from 'react';
import '../App.css'
import FeedbackList from "./FeedbackList";

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            formValues: {
                id: 0,
                name: '',
                email: '',
                company: '',
                message: ''
            },
            feedbacks: [
                {
                    id: 1,
                    name: 'Evgeniy',
                    email: 'yark1y@i.ua',
                    company: 'Quantag IT Solutions',
                    message: 'Super!'
                },
                {
                    id: 2,
                    name: 'Mariya',
                    email: 'mariyay@i.ua',
                    company: 'none',
                    message: 'You are great!'
                }
            ],
            nextID: 3
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        let target = event.target.name;
        let value = event.target.value;
        let formValues = this.state.formValues;
        formValues[target] = value;
        formValues.id = this.state.nextID;
        let nextID = this.state.nextID;
        nextID += 1;
        this.setState({
            formValues: formValues,
            nextID: nextID
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let feedbacks = this.state.feedbacks.slice();
        feedbacks.push({
            id: this.state.nextID,
            name: this.state.formValues.name,
            email: this.state.formValues.email,
            company: this.state.formValues.company,
            message: this.state.formValues.message
        });
        this.setState({
            feedbacks: feedbacks,
        });
    };

    handleDataReset = () => {
        let formData = this.state.formValues;
        formData.id = 0;
        formData.name = '';
        formData.email = '';
        formData.company = '';
        formData.message = '';
        this.setState({
            formValues: formData
        });
    };

    render() {
        return (
            <div className="contacts">
                <div className="contacts-socnet">
                    <h4>Github</h4>
                    <h4>Facebook</h4>
                    <h4>Twitter</h4>
                    <h4>LinkedIn</h4>
                </div>
                <h4 className="contacts-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" value={this.state.formValues.name}
                               onChange={this.handleInputChange} placeholder="Full name"/>
                        <input type="email" name="email" value={this.state.formValues.email}
                               onChange={this.handleInputChange} placeholder="E-mail"/>
                        <input type="text" name="company" value={this.state.formValues.company}
                               onChange={this.handleInputChange} placeholder="Company"/>
                        <input type="text" name="message" value={this.state.formValues.message}
                               onChange={this.handleInputChange} placeholder="Leave message"/>
                        <input type="submit" value="Add"/>
                    </form>
                </h4>
                <div className="contacts-table">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Company</th>
                            <th scope="col">Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        <FeedbackList
                            data={this.state.feedbacks}
                        />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
