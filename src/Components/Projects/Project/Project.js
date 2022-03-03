import React, { Component } from 'react'
import './Project.css'

class Project extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props.liveDisabled)
        return (
            <div className="project">
                <h2 className="projectLabel">{this.props.project.label}</h2>
                <img className="projectImage" src={this.props.project.image} alt={this.props.project.label} width="100%" height="170px" />
                <a className="projectInfo" href={this.props.project.git} target="_blank" rel="noopener noreferrer">Git Project</a>
                <button className="projectButton" disabled={this.props.project.liveDisabled}><a href={this.props.project.live} target="_blank" rel="noopener noreferrer" style={{color:"white",width:"100%"}} className={this.props.project.liveDisabled?"isDisabled":""}>Live here</a></button>
            </div>
        )
    }

}

export default Project;