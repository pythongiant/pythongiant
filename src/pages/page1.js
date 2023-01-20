import React, { Component } from "react";
import "./page1.scss";
import { GitHub, AlternateEmail, LinkedIn } from "@mui/icons-material/";
import Resume from "../Resume.pdf"
export default class Page extends Component {

  constructor() {
    super();
    this.myRef = React.createRef()  
    this.socials = [
      {
        key:0,
        icon: <GitHub className="icon-svg" />,
        link: "https://github.com/pythongiant",
      },
      {key:1,
        icon: <AlternateEmail className="icon-svg" />,
        link: "mailto:srihari.unnikrishnan@gmail.com",
      },
      {key:2,
        icon: <LinkedIn className="icon-svg" />,
        link: "https://www.linkedin.com/in/srihari-unnikrishnan-b567a7145/",
      },
    ];
  }
  executeScroll = () => this.myRef.scrollIntoView()
  
  render() {

    return (
      <div className="about-me"  ref={ (ref) => this.myRef=ref }>
        <h1>Srihari Unnikrishnan</h1>
        <div className="tags" >
          <p className="tag">Full Stack Engineer and App Developer</p>
          <p className="tag">Chennai | New Delhi</p>
        </div>
        <p className="about">
          I build beautiful and simple web applications in Python & JavaScript          because{" "} 
          <span className="highlight">i love it !</span>
        </p>
        <div className="download">
          <a href={Resume} target="_blank">Download My Resume !</a>
        </div>
        <div className="icons">
          {this.socials.map((item) => {
            return (
              <div>
                <a href={item.link}>{item.icon}</a>
              </div>
            );
          })}
        </div>
        <script>
          
        </script>
      </div>
    );
  }
}
