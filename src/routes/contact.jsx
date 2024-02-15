import React from "react";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import PhilsCV from "../assets/PhilsCV.pdf";
import Button from "../components/button";

// JSX with Bootstrap, passes props to Button, abstracts contact form to a component
export default function Contact() {
  return (
    <>
      <Layout>
        <div className="container-fluid contact h-100" id="about-me">
          <div className="row align-items-start justify-content-center">
            <h2 className="col-lg-8 col-10">Contact Me</h2>
          </div>
          <div className="row align-items-start justify-content-center">
            <div className="col-lg-4 col-10 my-3">
              <ContactForm />
            </div>
            <div className="col-lg-4 col-10  my-3">
              <Button title="My Email" link="mailto:phil@fullystacked.io" />
              <Button title="My CV" link={PhilsCV} />
              <Button
                title="My Github"
                link="https://github.com/philManWithBeard/"
              />
              <Button
                title="My LinkedIn"
                link="https://www.linkedin.com/in/phil-burrows-03b2432b4/"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
