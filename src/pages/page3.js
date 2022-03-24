import React, { Component } from "react";
import Project from "../components/projects/projects";
import "./page3.scss";
import { GitHub, AlternateEmail, LinkedIn } from "@mui/icons-material/";

export default class Page1 extends Component {
  constructor() {
    super();
    this.socials = [
      {
        key: 0,
        icon: <GitHub className="icon-svg" />,
        link: "https://github.com/pythongiant",
      },
      {
        key: 1,
        icon: <AlternateEmail className="icon-svg" />,
        link: "mailto:srihari.unnikrishnan@gmail.com",
      },
      {
        key: 2,
        icon: <LinkedIn className="icon-svg" />,
        link: "https://www.linkedin.com/in/srihari-unnikrishnan-b567a7145/",
      },
    ];
  }
  render() {
    return (
      <div className="portfolio">
        <h2>Projects</h2>
        <div className="tags">
          <p className="tag">My Past Work</p>

          <p className="project-tag">
            PS: This Website was made using Sass and React. check out the code{" "}
            <a href="">here</a>{" "}
          </p>
          <div className="parents">
          <div className="projects">
            <Project
              name="Formula One App"
              detail="lolz xd made using React Nativelolz xd made using React Nativelolz xd made using React Nativelolz xd made using React Native"
              ss={require("../app.png")}
              icons={this.socials}
            />
            <Project
              name="Formula One App"
              detail="lolz xd made using React Native"
              ss={require("../app.png")}
              icons={this.socials}
            />
            <Project
              name="Formula One App"
              detail="lolz xd made using React Native"
              ss={require("../app.png")}
              icons={this.socials}
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
