import React, { Component } from "react";
import "./page1.scss";
import { GitHub, AlternateEmail, LinkedIn } from "@mui/icons-material/";
import Resume from "../Resume.pdf";
export default class Page extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
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
        link: "https://www.linkedin.com/in/srihari-unnikrishnan",
      },
    ];
  }
  executeScroll = () => this.myRef.scrollIntoView();

  render() {
    return (
      <div className="about-me" ref={(ref) => (this.myRef = ref)}>
        <h1>Srihari Unnikrishnan</h1>
        <div className="tags">
          <p className="tag">Machine Learning & AI Engineer</p>
          <p className="tag">Quant Finance Engineer | Bengaluru, India</p>
        </div>
        <p className="about">
          I design and ship ML systems—from retrieval-augmented generation to
          quantitative research tooling—currently working on LLM research and
          AI system design at Microsoft. I also help funds and fintech teams
          build fast, production-ready AI for trading, risk, and analytics
          workflows.
        </p>
        <div className="download">
          <a href={Resume} target="_blank" rel="noreferrer">
            View my resume
          </a>
        </div>
        <div className="icons">
          {this.socials.map((item) => {
            return (
              <div key={item.key}>
                <a href={item.link}>{item.icon}</a>
              </div>
            );
          })}
        </div>
        <script></script>
      </div>
    );
  }
}
