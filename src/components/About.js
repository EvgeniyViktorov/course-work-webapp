import React, {Component} from 'react';
import '../App.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <h3 className="aboutTitle">About me:</h3>
                <div className="about">
                    <img src="https://avatars3.githubusercontent.com/u/14211765?s=400&u=7deccd8fb3f487a25b29f606e1d19a8ea343b606&v=4" height="250" width="250" alt=""/>
                    {/*<div className="contacts-socnet">*/}
                        {/*<a href="https://github.com/EvgeniyViktorov"> * Github * </a><br />*/}
                        {/*<a href="https://www.facebook.com/evgeniy.viktorov.9"> * Facebook * </a><br />*/}
                        {/*<a href="https://twitter.com/Yark1y"> * Twitter * </a><br />*/}
                        {/*<a href="https://www.linkedin.com/in/evgeniy-viktorov-47b284113/"> * LinkedIn * </a><br />*/}
                    {/*</div>*/}
                    <div className="about-wrapper">
                        <p className="">Passionate, pragmatic and enthusiastic software engineer, inspired by Joshua Bloch and Robert Martin.
                            <br/>
                            I have expertise in following fields: <br/>
                            * <b>Java</b> (Core, OOP, Collections, I/O, Multithreading, JDBC) <br/>
                            * <b>JavaEE</b> (Servlets, JPA) <br/>
                            * <b>Spring</b> (IoC, Data, MVC, Boot) <br/>
                            * <b>Hibernate</b> <br/>
                            * <b>Front-end</b> (HTML5, CSS3, <b>Javascript</b>(Jquery, ReactJS) Thymeleaf, Bootstrap) <br/>
                            * <b>Tools</b> (Git, Maven, Gradle, JUnit) <br/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
