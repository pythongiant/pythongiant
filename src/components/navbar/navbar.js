import React, { Component } from "react";
import "./navbar.scss";
import globals from "../../_globals.scss";

export default class Navbar extends Component {
    constructor(){
        super();
        const ref = React.createRef();  
    }
  render() {
    return (
      
        <div className="nav">
          <li>
            <div>
              <div className="navT"><p>about me</p></div>
              <div className="circle"></div>
            </div>
          </li>

          <li>
            <div>
              <div className="navT"><p>skills</p></div>
              <div className="circle"></div>
            </div>
          </li>

          <li>
            <div>
              <div className="navT"><p>projects</p></div>
              <div className="circle"></div>
            </div>
          </li>
        </div>
    );
  }
}
