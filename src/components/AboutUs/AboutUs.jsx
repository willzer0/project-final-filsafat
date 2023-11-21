// import iconX from "../../assets/img/close-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function AboutUs() {
  const [aboutUs, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/aboutUs")
      .then((res) => setFeatures(res.data));
  }, []);

  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Us</h2>
            {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
          </div>

          <div className="row">
            {aboutUs.map((item) => {
              return (
                <>
                  <div className="col-lg-4 col-sm-6 mb-4 " key={item.id}>
                    {/* Portfolio item 1*/}
                    <div className="portfolio-item ">
                      <div className="latar-belakang">
                        <a
                          className="portfolio-link"
                          data-bs-toggle="modal"
                          // href="#portfolioModal1"
                          href={`#portfolioModal${item.portfolio}`}
                        >
                          <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                              <i className="icon-read fa-brands fa-readme fa-beat-fade fa-3x"></i>
                              <p>Read Me</p>
                            </div>
                          </div>
                          <img
                            className="img-fluid"
                            src={`/src/assets/img/portfolio/${item.gambar}.jpg`}
                            alt="..."
                          />
                        </a>
                        <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">
                            {item.description}
                          </div>
                          <div className="portfolio-caption-subheading text-muted" />
                        </div>
                      </div>

                      <div
                        className="portfolio-modal modal fade"
                        id={`portfolioModal${item.portfolio}`}
                        tabIndex={-1}
                        role="dialog"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div
                              className="close-modal"
                              data-bs-dismiss="modal"
                            >
                              {/* <img src={iconX} alt="Close modal" /> */}
                            </div>
                            <div className="container">
                              <div className="row justify-content-center">
                                <div className="col-lg-8">
                                  <div className="modal-body">
                                    {/* Project details*/}
                                    <p className="item-intro text-muted">
                                      {item.description}
                                    </p>
                                    <img
                                      className="img-fluid d-block mx-auto"
                                      src={`/src/assets/img/portfolio/${item.gambar}.jpg`}
                                      alt="..."
                                    />
                                    {/* ISI DALAM */}
                                    <p>{item.descriptionAboutUs}</p>
                                    <ul className="list-inline">
                                      <li></li>
                                      <li></li>
                                    </ul>
                                    <button
                                      className="btn btn-primary btn-xl text-uppercase"
                                      data-bs-dismiss="modal"
                                      type="button"
                                    >
                                      <i className="fas fa-xmark me-1" />
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
