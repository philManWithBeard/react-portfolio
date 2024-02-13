import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import ProjectsObj from "../assets/projects.json";
import ProjectCard from "../components/projectCard";

export default function Project() {
  const { projectId } = useParams();
  const project = ProjectsObj.filter(
    (project) => project.slug === projectId
  )[0];
  return (
    <>
      <Layout>
        <main>
          <div className="py-5 container-fluid project">
            <div className="container ">
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
                    className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 d-block py-1"
                  >
                    Visit repo
                  </a>
                  <a
                    href={project.deployedApp}
                    target="_blank"
                    className="btn-dark d-inline-flex align-items-center mx-3 btn btn-primary btn-lg px-4 d-block py-1"
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
