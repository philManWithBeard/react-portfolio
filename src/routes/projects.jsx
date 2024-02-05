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

              {/* <!-- Card 2 --> */}
              <div className="cardContainer col-lg-4 col-md-12 col-sm-12">
                <div className="card border-dark">
                  <img src={grassroots} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Grassroots Druids Heath</h5>
                    <p className="card-text">
                      Astro.build site for a community group.
                    </p>
                    <a
                      href="https://grassrootsdruidsheath.pages.dev/"
                      target="_blank"
                      className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 "
                    >
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End card 2 --> */}

              {/* <!-- Card 3 --> */}
              <div className="cardContainer col-lg-4 col-md-12 col-sm-12">
                <div className="card border-dark">
                  <img src={listening} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Listeningto.io</h5>
                    <p className="card-text">
                      Share what you've been listening to recently.
                    </p>
                    <a
                      href="https://listeningto-7c9c0e4b942d.herokuapp.com/"
                      target="_blank"
                      className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 "
                    >
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End card 3 --> */}
              {/* <!-- Card 1 --> */}
              <div className="cardContainer col-lg-4 col-md-12 col-sm-12">
                <div className="card border-dark">
                  <img
                    src="https://placehold.co/800x800"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Placeholder</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a
                      href="https://github.com/philManWithBeard/"
                      target="_blank"
                      className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 "
                    >
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End card 1 --> */}

              {/* <!-- Card 2 --> */}
              <div className="cardContainer col-lg-4 col-md-12 col-sm-12">
                <div className="card border-dark">
                  <img
                    src="https://placehold.co/800x800"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Placeholder</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a
                      href="https://github.com/philManWithBeard/"
                      target="_blank"
                      className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 "
                    >
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End card 2 --> */}

              {/* <!-- Card 3 --> */}
              <div className="cardContainer col-lg-4 col-md-12 col-sm-12">
                <div className="card border-dark">
                  <img
                    src="https://placehold.co/800x800"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Placeholder</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a
                      href="https://github.com/philManWithBeard/"
                      target="_blank"
                      className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 "
                    >
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End card 3 --> */}
            </div>
          </div>
        </div>
        {/* <!-- End cards --> */}
      </Layout>
    </>
  );
}
