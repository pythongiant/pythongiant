import React, { Component } from "react";
import "./project.scss";

export default function Project(props) {
  return (
    <div className="project">
      <div>
        <img alt="App SS" className="screenshot" src={props.ss} />
      </div>
      <div className="content">
        <p className="title">{props.name}</p>
        <p className="details">{props.detail}</p>
         <div className="icons">
          {props.icons.map((item) => {
            return (
              <div>
                <a href={item.link}>{item.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
