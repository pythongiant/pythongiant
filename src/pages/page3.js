import React, { Component } from "react";
import Project from "../components/projects/projects";
import "./page3.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class Page extends Component {

  constructor() {
    
    super();
    this.myRef = React.createRef()
 
    this.f1_icons = [
      {
        key: 0,
        icon: <div><i className="fa-brands fa-github "></i></div>,
        link: "https://github.com/pythongiant/Formula-One-App",
      },
      {
        key: 1,
        icon: <div><i className="fa-brands fa-figma "></i></div>,
        link: "",
      },
      {
        key: 2,
        icon:<div><i className="fa-brands fa-react "></i></div>,
        link: "",
      },
    ];
    this.moon_icons=[
      {
        
        key:1,
        icon: <div><i className="fa-brands fa-react "></i></div>,
        link: "",
      },{
        key:2,
        icon: <div><i className="fa-brands fa-sass "></i></div>,
        link: "",
      },
      {
        key: 3,
        icon: <div><i className="fa-brands fa-figma "></i></div>,
        link: "",
      },
    ]
  }
  
  executeScroll = () => this.myRef.scrollIntoView()
  render() {
    return (
      <div className="portfolio"  ref={ (ref) => this.myRef=ref }>
        <h2>Projects</h2>
        <div className="tags">
          <p className="tag">My Past Work</p>

          <p className="project-tag">
            PS: This Website was made using Sass and React. check out the code{" "}
            <a href="https://github.com/pythongiant/pythongiant">here</a>{" "}
          </p>
          <div className="parents">
          <div className="projects">
            <Project
              name="Formula One"
              detail="Formula One is made to track the stats and details of all the drivers team and races. Built using pure JavaScript and React Native"
              ss={require("../f1_app.png")}
              icons={this.f1_icons}
            />
            <Project
              name="Rutree"
              detail="Rutree is a Financial Money Tracker that tracks and details transactions using Bank SMS(s)."
              ss={require("../Rutree_app.png")}
              icons={this.moon_icons}
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
