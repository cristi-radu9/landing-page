import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section id="contact" className="h-100">
                <div className="contact-container">
                    <div className="row contact-header w-100">
                        <i class="fas fa-envelope-open-text icon"></i>
                        <h1>Send me an email!</h1>
                    </div>

                    <form action="" method="post" id="contactForm" name="contactForm">
                        <fieldset>
                            <legend>Contact Info:</legend>
                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>

                            <div>
                                <button className="submit" onClick={(e)=>{e.preventDefault();alert("Not available yet!")}}>Submit</button>
                            </div>
                        </fieldset>
                    </form>

                </div>
            </section>
        )
    }
}

export default Contact;