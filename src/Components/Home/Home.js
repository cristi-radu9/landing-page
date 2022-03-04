import React, { Component } from 'react';
import '../../App.css';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'CR Resume',
            description:'I am web developer and I use React and .Net to develop pages'
        }
    }

    render() {
        const {name,description}=this.state;
        return (
            <section id="home">
                <div className="banner">
                    <div className="banner-text">
                        <h1>{name}</h1>
                        <h3>{description}.</h3>
                        <hr />
                        <ul className="social">
                            <a href="https://github.com/cristi-radu9/landing-page" target="_blank" className="button btn project-btn"><i className="fa fa-book"></i> Project</a>
                            <a href="https://github.com/cristi-radu9?tab=repositories" target="_blank" className="button btn github-btn"><i className="fab fa-github"></i> Github</a>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
export default Home;