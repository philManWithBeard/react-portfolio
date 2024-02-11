import React from "react";
import quizzical from "../assets/quizzical.png";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <>
      <div className="cardContainer col-lg-4 col-md-12 col-sm-12">
        <div className="card border-dark">
          <img
            src={props.imageSrc}
            className="card-img-top"
            alt={props.imageAlt}
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <Link
              to={"/projects/" + props.slug}
              href={"https://philmanwithbeard.github.io/projects/" + props.slug}
              className="btn-dark rounded-0 d-inline-flex align-items-center btn btn-primary btn-lg px-4"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
