import React, { Component } from 'react';
import profileImage from '../../Images/profile.jpg';
import './About.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Radu Cristian-Marian',
            city: 'Bucharest',
            country: 'Romania',
            mail: 'cristiradu1605@yahoo.com'
        }
    }

    render() {
        const { name, city, country, mail } = this.state;
        return (
            <section id="about" className="h-100-responsive">
                <div className="row about-responsive">
                    <div className="profile-image">
                        <img src={profileImage} alt="Profile Pic" className="profileImage" />
                    </div>
                    <div className="two-columns">
                        <h2>About Me</h2>
                        <p>I'm a junior developer graduated of computer science with experience working across the full-stack of software development.
                            I have built 20+ personal projects on different technologies and i'm planning to work on a lot more continuously developing my skills and learning new things.
                            I'm an positive person full of energy and fun, who never gets tired.</p>
                        <div className="row about-responsive">
                            <div className="column about-responsive">
                                <h2>Contact Details</h2>
                                <p className="column about-responsive">
                                    <span>{name}</span>
                                    <span>{city}</span>
                                    <span>{country}</span>
                                    <span>{mail}</span>
                                </p>
                            </div>
                            <div className="download about-responsive">
                                <p>
                                    <a href="" className="button" download="Radu_Cristian-Marian_CV.pdf"><i className="fa fa-download"></i> Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;