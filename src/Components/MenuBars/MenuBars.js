import React from 'react';
import './MenuBars.css';

function MenuBars(props) {
    const{showNav,setShowNav}=props;
    
    return (
        <div className={`menu-bars ${showNav?'change':''}`} onClick={()=>setShowNav(!showNav)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default MenuBars;