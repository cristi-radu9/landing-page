import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {showNav,setShowNav}=this.props;
        return (
            <div>
                <div className={`overlay overlay-slide-${showNav?'right':'left'}`}>
                    <nav>
                        <ul>
                            <li className={`slide-${showNav?'in':'out'}-1`} onClick={()=>setShowNav(!showNav)}><a href="#home">Home</a></li>
                            <li className={`slide-${showNav?'in':'out'}-2`} onClick={()=>setShowNav(!showNav)}><a href="#about">About</a></li>
                            <li className={`slide-${showNav?'in':'out'}-3`} onClick={()=>setShowNav(!showNav)}><a href="#resume">Resume</a></li>
                            <li className={`slide-${showNav?'in':'out'}-4`} onClick={()=>setShowNav(!showNav)}><a href="#projects">Projects</a></li>
                            <li className={`slide-${showNav?'in':'out'}-5`} onClick={()=>setShowNav(!showNav)}><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navigation;