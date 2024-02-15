import React from "react";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import ProjectsObj from "../assets/projects.json";

export default function Project() {
  // takes parameters from the react router dom
  const { projectId } = useParams();
  // compares the parameter to the slug in the imported object and filters the json so it's unique to that project
  const project = ProjectsObj.filter(
    (project) => project.slug === projectId
  )[0];
  return (
    <>
      <Layout>
        <main>
          <div className="container-fluid project">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-3 col-sm-4 col-3">
                  <img
                    src={project.imageSrc}
                    className="card-img-top card border-dark"
                    alt={project.imageAlt}
                  />
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6 col-sm-6 col-8">
                  <h2 className="display-5 py-1">{project.name}</h2>
                  <p className="py-1">{project.skills}</p>
                  <p className="py-1">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn-dark rounded-0 d-inline-flex align-items-center btn btn-primary btn-lg px-4 d-block py-1"
                  >
                    Visit repo
                  </a>
                  <a
                    href={project.deployedApp}
                    target="_blank"
                    className="btn-dark rounded-0 d-inline-flex align-items-center mx-3 btn btn-primary btn-lg px-4 d-block py-1"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
