import React, {Component} from 'react';
import '../App.css'

import {
    Link
} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="card-header">
                <h1 className="header-alignment">Evgeniy Viktorov <small> Full Stack Developer</small></h1>
                <div className="header-links-alignment">
                    <Link to="/" className="col-sm-4">Home</Link>
                    <Link to="/projects" className="col-sm-4">Projects</Link>
                    <Link to="/contact" className="col-sm-4">Contact me!</Link>
                </div>
            </div>
        )
    }
}
