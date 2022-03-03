import React, { Component } from 'react';
import { Collapse } from 'antd';
import Project from './Project/Project';
import projectsArray from './ProjectsArray';
import './Projects.css';
import './antd.css'
import Carousel from "react-elastic-carousel";

const { Panel } = Collapse;

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }
    
    render() {
        const breakPoints = [
            { width: 1, itemsToShow: 1, itemsToScroll:1 },
            { width: 550, itemsToShow: 2,itemsToScroll:2 },
            { width: 768, itemsToShow: 3,itemsToScroll:3},
            { width: 1200, itemsToShow: 4,itemsToScroll:4},
        ];
        return (
            <section id="projects" className="h-100 column">
                <h1 className="project-header">My Projects</h1>
                <Collapse className='collapse' destroyInactivePanel expandIconPosition='left' defaultActiveKey={['1']}>
                    <Panel className='collapse' header="Java Script/React Projects" key="1">
                        <Carousel 
                        // enableAutoPlay 
                        touchMove 
                        // autoPlaySpeed={5000} 
                        enableSwipe 
                        breakPoints={breakPoints} 
                        disableArrowsOnEnd
                        easing='ease'
                        transitionMs="2000"
                        >
                            {projectsArray !== []
                                && projectsArray.map(project => {
                                    if(project.type==='JavaScript'){
                                        return (<Project key={project.label} project={project} />)
                                    }
                                } 
                            )}
                        </Carousel>
                    </Panel>
                    <Panel className='collapse' header="C#/.Net Projects" key="2">
                        <Carousel enableAutoPlay={true} touchMove={true} autoPlaySpeed={2500} enableSwipe breakPoints={breakPoints}>
                            {projectsArray !== []
                                && projectsArray.map(project => {
                                    if(project.type==='C#'){
                                        return (<Project key={project.label} project={project} />)
                                    }
                                }
                            )}
                        </Carousel>
                    </Panel>
                    <Panel className='collapse' header="Other Projects" key="3">
                        <Carousel enableAutoPlay={true} touchMove={true} autoPlaySpeed={2500} enableSwipe breakPoints={breakPoints}>
                            {true && projectsArray.map(project => {
                                    if(project.type==='Other'){
                                        return (<Project key={project.label} project={project} />)
                                    }
                                }
                            )}
                        </Carousel>
                    </Panel>
                </Collapse>
            </section>
        )
    }
}

export default Projects;