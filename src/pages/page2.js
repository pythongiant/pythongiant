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
        icon: <i className="fa-brands fa-python"></i>,
        link: "https://www.python.org/",
      },
      {
        key: 1,
        icon:<i className="fa-solid fa-brain"></i>,
        link: "https://pytorch.org/",
      },
      {
        key: 2,
        icon: <i className="fa-solid fa-chart-line"></i>,
        link: "https://pandas.pydata.org/",
      },

      { key: 4, icon: <i className="fa-solid fa-database"></i>, link: "https://www.postgresql.org/" },
      { key: 5, icon: <i className="fa-solid fa-cloud"></i>, link: "https://azure.microsoft.com/" },
      { key: 6, icon: <i className="fa-solid fa-coins"></i>, link: "https://quantstack.net/" },
    ];
  }
  executeScroll = () => this.myRef.scrollIntoView()
  render() {
    return (
      <div className="skills"  ref={ (ref) => this.myRef=ref }>
        <h2>Expertise</h2>
        <p>
          Machine learning engineer and quant-focused builder: production LLM
          pipelines (RAG, evaluation, retrieval), predictive modeling, and
          research tooling for trading, risk, and analytics. Heavy Python/ML
          stack with solid data engineering, API, and cloud deployment
          experience.{" "}
        </p>
        <div className="icons">
          {this.socials.map((item) => {
            return (
              <div key={item.key}>
                <a href={item.link}>{item.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
