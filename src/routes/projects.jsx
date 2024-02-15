import React from "react";
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";
import ProjectsObj from "../assets/projects.json";

// Maps over the project json and passes props to the ProjectCard component
export default function Projects() {
  return (
    <>
      <Layout>
        {/* <!-- Cards --> */}
        <div className="container-fluid work" id="work">
          <div className="container">
            <h2 className="sectionHeading pb-3">Work</h2>
            <div className="row g-5">
              {/* <!-- Card 1 --> */}
              {ProjectsObj.map((project) => (
                <ProjectCard
                  name={project.name}
                  slug={project.slug}
                  key={project.id}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  github={project.github}
                  deployedApp={project.deployedApp}
                  skills={project.skills}
                  description={project.description}
                />
              ))}
              {/* <!-- End card 1 --> */}
            </div>
          </div>
        </div>
        {/* <!-- End cards --> */}
      </Layout>
    </>
  );
}
