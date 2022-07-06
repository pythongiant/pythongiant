import React, { Component, useEffect } from "react";
import "./navbar.scss";
import globals from "../../_globals.scss";
export default class Navbar extends Component {
    constructor(){
        super();
        
    } 
   
  render() {
   
    const executeScroll1 = () => {this.props.refs[0].current.executeScroll()}; 
    const executeScroll2 = () => {this.props.refs[1].current.executeScroll()};
    const executeScroll3 = () => {this.props.refs[2].current.executeScroll()};

    return (
      
        <div className="nav">
          <li>
            <div onClick={executeScroll1}>
              <div className="navT"><p>about me</p></div>
              <div className="circle"></div>
            </div>
          </li>

          <li>
            <div onClick={executeScroll2}>
              <div className="navT"><p>skills</p></div>
              <div className="circle"></div>
            </div>
          </li>

          <li>
            <div onClick={executeScroll3}>
              <div className="navT"><p>projects</p></div>
              <div className="circle"></div>
            </div>
          </li>
        </div>
    );
  }
}
