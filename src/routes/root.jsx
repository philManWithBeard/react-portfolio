import phil from "../assets/phil-pic.png";
import Layout from "../components/layout";

export default function Root() {
  return (
    <>
      <Layout>
        {/* <!-- Hero --> */}
        <main>
          <div className="hero container-fluid">
            <div className="container ">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-3">
                  <img
                    src={phil}
                    className="max-width: 100% float-end img-fluid"
                    alt="Minimalist Line Art"
                  />
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-8">
                  <h2 className="display-1 py-2">
                    Hi, I'm Phil Burrows and I'm a frontend developer
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid about-me" id="about-me">
            <div className="container">
              <div className="row align-items-end justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h2 className="sectionHeading">About Me</h2>
                  <p className="">
                    My day job is in product management and business analysis,
                    where I deliver service and product improvements based on
                    user needs. The product that I initiated, performed business
                    analysis for and now manage collects data, measures
                    performance and determines payments for over £50m of
                    funding.
                  </p>
                  <p className="">
                    Outside of work I like running and listening to ridiculous
                    amount of music. Recommend a band to me and I'll love you
                    forever.
                  </p>
                  <a className="btn-dark rounded-0 d-inline-flex align-items-center btn-dark d-inline-flex align-items-center btn btn-primary btn-lg px-4  btn-lg px-4">
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Cards --> */}
          <div className="container-fluid skills" id="skills">
            <div className="container">
              <h2 className="sectionHeading pb-3">Skills</h2>
              <div className="row g-5">
                {/* <!-- Card 1 --> */}
                <div className="cardContainer col-lg-3 col-md-6 col-sm-6">
                  <div className="card border-dark">
                    <div className="card-body">
                      <h5 className="card-title">React</h5>
                      <p className="card-text">
                        Single page apps, components, interactivity and state.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End card 1 --> */}
                {/* <!-- Card 1 --> */}
                <div className="cardContainer col-lg-3 col-md-6 col-sm-6">
                  <div className="card border-dark">
                    <div className="card-body">
                      <h5 className="card-title">Javascript</h5>
                      <p className="card-text">
                        Interactivity and magic. Functional and as pure as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End card 1 --> */}
                {/* <!-- Card 1 --> */}
                <div className="cardContainer col-lg-3 col-md-6 col-sm-6">
                  <div className="card border-dark">
                    <div className="card-body">
                      <h5 className="card-title">HTML</h5>
                      <p className="card-text">
                        Semantic Markup and the latest cross-browser features.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End card 1 --> */}
                {/* <!-- Card 1 --> */}
                <div className="cardContainer col-lg-3 col-md-6 col-sm-6">
                  <div className="card border-dark">
                    <div className="card-body">
                      <h5 className="card-title">Bootstrap</h5>
                      <p className="card-text">
                        Rapid prototyping webpages and custom styling.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End card 1 --> */}
              </div>
            </div>
          </div>
          {/* <!-- End cards --> */}
          {/* <!-- About --> */}
        </main>
      </Layout>
    </>
  );
}
