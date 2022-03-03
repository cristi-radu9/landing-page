import React,{Component} from 'react';
import './Resume.css';

class Resume extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render(){
        return(
            <section id="resume" className="column h-100">
                
                <div className="row education-container column-responsive">
                    <div className="resume-header column-responsive">
                        <h1 className="m-0">Education</h1>
                        <div className="bar"></div>
                    </div>
                    <div className="info">
                        <div className="mt15">
                            <h1 className="m-0">Bucharest University of Economic Studies</h1>
                            <div className="row">
                                <p>Bachelor degree</p>
                                <ul>
                                    <li>2020</li>
                                </ul>
                            </div>
                            <p className="f15">I've studied Economic Informatics the english program at Faculty of Cybernetics, Statistics and Informatics</p>
                        </div>
                        <div>
                        <h1 className="m-0">Bucharest University of Economic Studies</h1>
                            <div className="row">
                                <p>Master</p>
                                <ul>
                                    <li>Present</li>
                                </ul>
                            </div>
                            <p className="f15">I'm studying IT&C security master - cyber security master.</p>
                        </div>
                    </div>
                </div>
                <div className="dividing-bar"></div>

                <div className="row column-responsive">
                    <div className="resume-header">
                        <h1 className="m-0">Work</h1>
                        <div className="bar work-bar"></div>
                    </div>
                    <div className="info">
                        <div className="mt15">
                            <h1 className="m-0">Softbinator Technologies</h1>
                            <div className="row">
                                <ul>
                                    <li>2020 - Present</li>
                                </ul>
                            </div>
                            <p className="f15"> Junior .Net developer, also doing front-end in React.</p>
                        </div>
                    </div>
                </div>
                <div className="dividing-bar"></div>

                <div className="row column-responsive">
                    <div className="resume-header">
                        <h1 className="m-0">Skills</h1>
                        <div className="bar skills-bar"></div>
                    </div>
                    <div className="info">
                        <div className="mt15">
                            <ul>
                                <li>
                                    <p>C#</p>
                                    <div className="bar-expand">
                                        <div style={{height:"42px", width: "80%", backgroundColor: this.getRandomColor() }}></div>
                                    </div>
                                </li>
                                <li>
                                    <p>React</p>
                                    <div className="bar-expand">
                                        <div style={{height:"42px", width: "65%", backgroundColor: this.getRandomColor() }}></div>
                                    </div>
                                </li>
                                <li>
                                    <p>JavaScript</p>
                                    <div className="bar-expand">
                                        <div style={{height:"42px", width: "70%", backgroundColor: this.getRandomColor() }}></div>
                                    </div>
                                </li>
                                <li>
                                    <p>CSS</p>
                                    <div className="bar-expand">
                                        <div style={{height:"42px", width: "50%", backgroundColor: this.getRandomColor() }}></div>
                                    </div>
                                </li>
                                <li>
                                    <p>C++</p>
                                    <div className="bar-expand">
                                        <div style={{height:"42px", width: "40%", backgroundColor: this.getRandomColor() }}></div>
                                    </div>
                                </li>
                                <li>
                                    <p>Java</p>
                                    <div className="bar-expand">
                                        <div style={{height:"42px", width: "45%", backgroundColor: this.getRandomColor() }}></div>
                                    </div>
                                </li>
                                <li>
                                    <p>C</p>
                                    <div className="bar-expand">
                                        <div style={{height:"42px", width: "30%", backgroundColor: this.getRandomColor() }}></div>
                                    </div>
                                </li>
                                <li>
                                    <p>Python</p>
                                    <div className="bar-expand">
                                        <div style={{height:"42px", width: "20%", backgroundColor: this.getRandomColor() }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Resume;