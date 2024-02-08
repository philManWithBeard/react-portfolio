import { Form } from "react-router-dom";
import Layout from "../components/layout";
import grassroots from "../assets/grassroots.png";
import listening from "../assets/listeningto.png";
import quizzical from "../assets/quizzical.png";
import ProjectCard from "../components/projectCard";
import ProjectsObj from "../assets/projects.json";

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
                  key={project.id}
                  imageSrc={project.imageSrc}
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
