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
                        <p>Dedicated and adaptable Full Stack Developer with over 3 years of experience in .NET and React, focused on continuous learning and skill enhancement. Proven track record of successful team leadership and agile project management as a certified Scrum Master 1. A fast learner and excellent team player committed to delivering high-quality results.</p>
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
                                    <a href="" className="button" onClick={()=>alert("Not available!")}><i className="fa fa-download"></i> Download Resume</a>
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