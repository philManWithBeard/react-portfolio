import React from "react";
import quizzical from "../assets/quizzical.png";

export default function ProjectCard(props) {
  return (
    <>
      <div className="cardContainer col-lg-4 col-md-12 col-sm-12">
        <div className="card border-dark">
          <img src={quizzical} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <a
              href="https://philmanwithbeard.github.io/quizzical/"
              target="_blank"
              className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
