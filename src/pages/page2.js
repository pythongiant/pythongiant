import React, { Component } from "react";
import "./page2.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default class Page extends Component {

  constructor() {
    super();
    this.myRef = React.createRef()

    this.socials = [
      {
        key: 0,
        icon: <i className="fa-brands fa-figma"></i>,
        link: "https://www.figma.com/",
      },
      {
        key: 1,
        icon:<i className="fa-brands fa-node-js"></i>,
        link: "mailto:srihari.unnikrishnan@gmail.com",
      },
      {
        key: 2,
        icon: <i className="fa-brands fa-react"></i>,
        link: "https://www.linkedin.com/in/srihari-unnikrishnan-b567a7145/",
      },

      { key: 4, icon: <i className="fa-brands fa-python"></i>, link: "" },
      { key: 5, icon: <i className="fa-brands fa-html5"></i>, link: "" },
      { key: 6, icon: <i className="fa-brands fa-sass"></i>, link: "" },
    ];
  }
  executeScroll = () => this.myRef.scrollIntoView()
  render() {
    return (
      <div className="skills"  ref={ (ref) => this.myRef=ref }>
        <h2>Skills</h2>
        <p>
          I mainly work with JavaScript and Python Web and Native Frameworks, my
          area of speciality is building small and medium scale web apps.{" "}
        </p>
        <div className="icons">
          {this.socials.map((item) => {
            return (
              <div>
                <a href={item.link}>{item.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
