import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <>
      <div className="cardContainer col-lg-4 col-md-12 col-sm-12">
        <div className="card border-dark h-100">
          <img
            src={props.imageSrc}
            className="card-img-top"
            alt={props.imageAlt}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div className="my-2">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
            </div>
            <div>
              <Link
                to={"/projects/" + props.slug}
                href={
                  "https://philmanwithbeard.github.io/projects/" + props.slug
                }
                className="btn-dark rounded-0 d-inline-flex btn btn-primary btn-lg px-4 mt-2"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
