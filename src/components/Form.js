import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            company: '',
            message: ''
        }
    }
    render()
    {
        return (
            <div>
                <Field />
            </div>
        )
    }
}
