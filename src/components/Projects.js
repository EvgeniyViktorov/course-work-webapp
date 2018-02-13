import React, {Component} from 'react';
import '../App.css'

export default class Projects extends Component {
    render() {
        return (
            <div className="title">
                <h3 className="aboutTitle">My projects:</h3>
                <div className="projects-items-wrapper">
                    <div className="card card-block bg-faded">
                        <h3>Accounting CRM</h3>
                        <p><em><b>Technologies used:</b></em> PostgreSQL, Jenkins, Maven, Tomcat, Spring MVC, Spring
                            Security, Hibernate, REST API, JUnit, SQL.
                            <br /><em><b>What is done:</b></em> Overseeing and managing the automation of mentoring
                            activities. Application that automates all mentoring processes in startup. Designing all
                            development stages and layers of web application (from architecture decomposition to
                            front-end
                            development).
                        </p>
                    </div>
                    <div className="card card-block bg-faded">
                        <h3>Android Cordova Widget</h3>
                        <p><em><b>Technologies used:</b></em> HTML5, CSS3, Jquery, Cordova Widget API.
                            <br /><em><b>What is done:</b></em> Widget layout for Sparkasse Bank android application.
                            Created full layout
                            and transitions using jquery and cordova widget api. Created enrollment, menu and widget
                            that
                            manages execution of every other widget.
                        </p>

                    </div>
                    <div className="card card-block bg-faded">
                        <h3>FinTS Client-Bank</h3>
                        <p><em><b>Technologies used:</b></em> Javascript, Promises, Node.js, Browserify
                            <br /><em><b>What is done:</b></em> Added support for new business transactions and
                            operations
                            with must be supported by smsTAN/pushTAN/chipTAN confirmation. Created TAN support for
                            application from scratch and implemented it in new business transaction. Added error
                            handling
                            and integration to current android application and widget system I have created before.
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}
