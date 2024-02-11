import { Form } from "react-router-dom";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import { Link } from "react-router-dom";
import PhilsCV from "../assets/PhilsCV.pdf";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="container-fluid about-me" id="about-me">
          <div className="container">
            <div className="row align-items-start justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h2 className="sectionHeading">Contact Me</h2>
                <ContactForm />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 row align-items-start justify-content-center lg-px-5">
                <Link
                  to="mailto:phil@fullystacked.io"
                  target="_blank"
                  className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 d-block py-1 my-3"
                >
                  Email
                </Link>
                <Link
                  to={PhilsCV}
                  target="_blank"
                  className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 d-block py-1 my-3"
                >
                  My CV
                </Link>
                <Link
                  to="https://github.com/philManWithBeard/"
                  target="_blank"
                  className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 d-block py-1  my-3"
                >
                  My Github
                </Link>
                <Link
                  to="https://www.linkedin.com/in/phil-burrows-03b2432b4/"
                  target="_blank"
                  className="btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4 d-block py-1  my-3"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
