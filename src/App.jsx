import "./assets/css/index.css";
import Nav from "react-bootstrap/Nav";
import { useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Phone from "./assets/images/phone.PNG";
import People from "./assets/images/people.PNG";
import Container from "react-bootstrap/Container";
import Dashboard from "./assets/images/dashboard.jpg";
import MobileIllustration from "./assets/images/services/mobile.svg";
import WebsiteIllustration from "./assets/images/services/website.svg";
import UIUXDesignIllustration from "./assets/images/services/uiux.svg";
import AnimationIllustration from "./assets/images/services/animation.svg";
import VideoEditingIllustration from "./assets/images/services/video-editing.svg";
import GraphicDesignIllustration from "./assets/images/services/graphic-design.svg";

const App = () => {
  const PackageFilterRefs = useRef({});
  const [expanded, setExpanded] = useState(false);
  const [activePackageFilter, setActivePackageFilter] = useState(
    "Mobile App Development"
  );

  // Navbar
  const closeNavbar = () => {
    setExpanded(false);
  };

  // Filter Packages
  const packageFilters = [
    "Mobile App Development",
    "Website Development",
    "UI/UX Design",
    "Video Editing",
    "Graphic Design",
    "2D Animation Production",
  ];

  const packageContents = {
    "Mobile App Development": <PackageMobile />,
    "Website Development": <PackageWebsite />,
    "UI/UX Design": <PackageUIUXDesign />,
    "Video Editing": <PackageVideoEditing />,
    "Graphic Design": <PackageGraphicDesign />,
    "2D Animation Production": <Package2DAnimation />,
  };

  const handleFilterClick = (filter) => {
    setActivePackageFilter(filter);

    PackageFilterRefs.current[filter]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        expand="lg"
        expanded={expanded}
        className="fixed-top py-3"
        onToggle={() => setExpanded((expanded) => !expanded)}
      >
        <Container>
          <Navbar.Brand href="/">zavintech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-3 mt-lg-0">
              <Nav.Link href="#services" onClick={closeNavbar}>
                Our Services
              </Nav.Link>
              <Nav.Link href="#" onClick={closeNavbar}>
                Project
              </Nav.Link>
              <Nav.Link href="#packages" onClick={closeNavbar}>
                Plans and Rate
              </Nav.Link>
              <Nav.Link href="#" onClick={closeNavbar}>
                FAQ
              </Nav.Link>
              <Nav.Link href="#about" onClick={closeNavbar}>
                About Us
              </Nav.Link>
              <Nav.Link href="#" onClick={closeNavbar}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header */}
      <header>
        <div className="container py-5 py-lg-0">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <h1 className="title mb-3 text-sm-center text-lg-start">
                {/* Explore How Websites & Animation Elevate Your Brand */}
                Professional Digital Services for Business Growth
              </h1>
              <p className="description mb-4 text-sm-center text-lg-start">
                {/* Zavintech helps your businesses grow by providing professional
                websites, smart e-commerce solutions, and creative animations to
                strengthen your online presence. */}
                Zavintech provides a complete digital solution, ranging from app
                development, websites, to visual design, to help your business
                build a professional image and effectively reach its target
                market.
              </p>

              <div className="d-flex align-items-center justify-content-sm-center justify-content-lg-start gap-3">
                <a
                  href="#services"
                  className="btn border-2 border-white bg-white px-4 py-2 rounded-pill fs-6 fw-semibold"
                >
                  Explore More
                </a>

                <a
                  href="#packages"
                  className="btn border-2 border-white bg-transparent px-4 py-2 rounded-pill fs-6 fw-semibold text-white"
                >
                  Plans and Rate
                </a>
              </div>
            </div>

            <div className="col position-relative d-flex align-items-center ps-lg-4 ps-xl-5">
              <img
                src={Dashboard}
                className="rounded-3 float-animation"
                style={{ width: "90%" }}
                width="90%"
                height="auto"
                alt="Dashboard Illustration"
              />

              <img
                src={Phone}
                className="rounded-3 position-absolute float-animation"
                style={{
                  width: "20%",
                  right: "0.75rem",
                }}
                width="20%"
                height="auto"
                alt="Phone Illustration"
              />
            </div>
          </div>
        </div>

        {/* Waves Animation */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#F0F4FF" />
            </g>
          </svg>
        </div>
      </header>

      <main>
        {/* Layanan / Our Services */}
        <section id="services">
          <div className="container">
            <div style={{ marginBottom: "2.5rem" }}>
              <h1 className="title">Our Services</h1>
              <p className="description">
                We deliver solutions that fit your needs — simple, clear, and
                effective.
              </p>
            </div>

            <div className="row justify-content-center g-3">
              {/* Mobile */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="box">
                      <img
                        src={MobileIllustration}
                        width="100%"
                        height="100%"
                        alt="Mobile App Development"
                      />
                    </div>
                    <h5 className="card-title">Mobile App Development</h5>
                    <p className="card-text">
                      We build user-friendly mobile apps with great design and
                      reliable performance, tailored to your business goals and
                      your users' needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="box">
                      <img
                        src={WebsiteIllustration}
                        width="100%"
                        height="100%"
                        alt="Website Development"
                      />
                    </div>
                    <h5 className="card-title">Website Development</h5>
                    <p className="card-text">
                      We design and develop modern, responsive websites that
                      showcase your brand and help you connect with your
                      audience effectively.
                    </p>
                  </div>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="box">
                      <img
                        src={UIUXDesignIllustration}
                        width="100%"
                        height="100%"
                        alt="UI/UX Design"
                      />
                    </div>
                    <h5 className="card-title">UI/UX Design</h5>
                    <p className="card-text">
                      We design thoughtful, user-friendly interfaces that
                      enhance experience, simplify navigation, and support
                      business goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Editing */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="box">
                      <img
                        src={VideoEditingIllustration}
                        width="100%"
                        height="100%"
                        alt="Video Editing"
                      />
                    </div>
                    <h5 className="card-title">Video Editing</h5>
                    <p className="card-text">
                      We edit and refine videos with clear storytelling, smooth
                      transitions, and visuals that keep your audience engaged
                      to the end.
                    </p>
                  </div>
                </div>
              </div>

              {/* Graphic Design */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="box">
                      <img
                        src={GraphicDesignIllustration}
                        width="100%"
                        height="100%"
                        alt="Graphic Design"
                      />
                    </div>
                    <h5 className="card-title">Graphic Design</h5>
                    <p className="card-text">
                      We create professional graphic assets that align with your
                      brand, convey your message, and leave a lasting visual
                      impression.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2D Animation */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="box">
                      <img
                        src={AnimationIllustration}
                        width="100%"
                        height="100%"
                        alt="2D Animation"
                      />
                    </div>
                    <h5 className="card-title">2D Animation Production</h5>
                    <p className="card-text">
                      We produce engaging 2D animations that simplify complex
                      ideas, promote your services, and bring your brand to life
                      with motion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages">
          <div className="container">
            <div style={{ marginBottom: "2.5rem" }}>
              <h1 className="title">Our Packages</h1>
              <p className="description">
                We offer flexible pricing to match your project needs and
                budget. Each package can be adjusted based on the complexity and
                timeline of your project.
              </p>
            </div>

            {/* Filter */}
            <div
              className="d-flex align-items-center gap-4 flex-nowrap overflow-x-auto filter"
              style={{
                scrollbarWidth: "none",
                borderBottom: "2px solid #e0e0e0",
              }}
            >
              {packageFilters.map((filter) => (
                <span
                  key={filter}
                  ref={(el) => (PackageFilterRefs.current[filter] = el)}
                  className={`fw-semibold text-nowrap ${
                    activePackageFilter === filter ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(filter)}
                >
                  <small>{filter}</small>
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="package-content">
              {packageContents[activePackageFilter]}
            </div>

            <p
              style={{ marginTop: "2rem" }}
              className="mb-0 text-center fw-semibold d-none d-sm-block"
            >
              Not sure which one to pick?{" "}
              <a
                href="https://wa.me/6285175067273?text=Halo%2C%20saya%20mau%20konsultasi."
                style={{ color: "#4287f5" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a consultation first
              </a>
              .
            </p>

            <p
              style={{ marginTop: "2rem" }}
              className="mb-0 text-center fw-semibold d-sm-none"
            >
              Not sure which one to pick?{" "}
              <a
                href="https://wa.me/6285175067273?text=Halo%2C%20saya%20mau%20konsultasi."
                style={{ color: "#4287f5" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />
                Get a consultation first
              </a>
              .
            </p>
          </div>
        </section>

        {/* Projects */}

        {/* About Me */}
        <section id="about">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col order-lg-1 mb-5 mb-lg-0">
                <h1 className="title mb-3">Why Choose Us</h1>
                <p className="description mb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <div className="row row-cols-1 row-cols-sm-2 g-3 mt-3">
                  <div className="col">
                    <div className="card border-0 bg-transparent rounded-0 h-100">
                      <div className="card-body p-0">
                        <div className="d-flex align-items-start">
                          <div className="icon-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="#f0f6ff"
                                d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"
                              />
                            </svg>
                          </div>
                          <div className="ms-3">
                            <h5 className="card-title fw-semibold mb-1">
                              Kelebihan 1
                            </h5>
                            <p className="card-text fs-6">
                              Lorem Ipsum is simply dummy text of the printing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0 bg-transparent rounded-0 h-100">
                      <div className="card-body p-0">
                        <div className="d-flex align-items-start">
                          <div className="icon-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="#f0f6ff"
                                d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"
                              />
                            </svg>
                          </div>
                          <div className="ms-3">
                            <h5 className="card-title fw-semibold mb-1">
                              Kelebihan 2
                            </h5>
                            <p className="card-text fs-6">
                              Lorem Ipsum is simply dummy text of the printing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0 bg-transparent rounded-0 h-100">
                      <div className="card-body p-0">
                        <div className="d-flex align-items-start">
                          <div className="icon-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="#f0f6ff"
                                d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"
                              />
                            </svg>
                          </div>
                          <div className="ms-3">
                            <h5 className="card-title fw-semibold mb-1">
                              Kelebihan 3
                            </h5>
                            <p className="card-text fs-6">
                              Lorem Ipsum is simply dummy text of the printing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0 bg-transparent rounded-0 h-100">
                      <div className="card-body p-0">
                        <div className="d-flex align-items-start">
                          <div className="icon-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="#f0f6ff"
                                d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"
                              />
                            </svg>
                          </div>
                          <div className="ms-3">
                            <h5 className="card-title fw-semibold mb-1">
                              Kelebihan 4
                            </h5>
                            <p className="card-text fs-6">
                              Lorem Ipsum is simply dummy text of the printing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="image-wrapper">
                  <img src={People} alt="People" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Working Process */}

        {/* FAQ */}

        {/* Contact Us */}
      </main>

      {/* Footer */}
    </>
  );
};

// Package Mobile
const PackageMobile = () => (
  <>
    <div
      id="packageMobile"
      className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
    >
      {/* Basic Plans */}
      <div className="col">
        <div className="card bg-white h-100 rounded-5">
          <div className="card-body p-4">
            <h5 className="card-title mb-1">Basic Plan</h5>
            <span className="card-subtitle">
              <small>Ideal for small businesses</small>
            </span>

            <div className="mb-4" style={{ marginTop: "4rem" }}>
              <h1 className="card-price mb-4 text-center">Rp 15 JT</h1>
              <hr
                className="my-0"
                style={{ height: "2px", backgroundColor: "#4287f5" }}
              />
            </div>

            <ul
              style={{ marginBottom: "2.5rem" }}
              className="custom-list text-dark fs-6"
            >
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
            </ul>

            <a
              href="#"
              className="btn text-white fs-6 fw-semibold w-100 rounded-pill"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Business Plans */}
      <div className="col">
        <div className="card bg-white h-100 rounded-5">
          <div className="card-body p-4">
            <h5 className="card-title mb-1">Business Plan</h5>
            <span className="card-subtitle">
              <small>Perfect for growing businesses</small>
            </span>

            <div className="mb-4" style={{ marginTop: "4rem" }}>
              <h1 className="card-price mb-4 text-center">Rp 15 JT</h1>
              <hr
                className="my-0"
                style={{ height: "2px", backgroundColor: "#4287f5" }}
              />
            </div>

            <ul
              style={{ marginBottom: "2.5rem" }}
              className="custom-list text-dark fs-6"
            >
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
            </ul>

            <a
              href="#"
              className="btn text-white fs-6 fw-semibold w-100 rounded-pill"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Enterprise Plans */}
      <div className="col">
        <div className="card bg-white h-100 rounded-5">
          <div className="card-body p-4">
            <h5 className="card-title mb-1">Enterprise Plan</h5>
            <span className="card-subtitle">
              <small>Ideal for large corporations</small>
            </span>

            <div className="mb-4" style={{ marginTop: "4rem" }}>
              <h1 className="card-price mb-4 text-center">Rp 15 JT</h1>
              <hr
                className="my-0"
                style={{ height: "2px", backgroundColor: "#4287f5" }}
              />
            </div>

            <ul
              style={{ marginBottom: "2.5rem" }}
              className="custom-list text-dark fs-6"
            >
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
              <li>Simple and clean design</li>
            </ul>

            <a
              href="#"
              className="btn text-white fs-6 fw-semibold w-100 rounded-pill"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

// Package Website
const PackageWebsite = () => (
  <>
    <h3>Website Packages</h3>
    <p>Konten spesifik untuk Website...</p>
  </>
);

// Package UI/UX Design
const PackageUIUXDesign = () => (
  <>
    <h3>UI/UX Packages</h3>
    <p>Konten spesifik untuk UI/UX...</p>
  </>
);

// Package Video Editing
const PackageVideoEditing = () => (
  <>
    <h3>Video Editing Packages</h3>
    <p>Konten spesifik untuk Video Editing...</p>
  </>
);

// Package Graphic Design
const PackageGraphicDesign = () => (
  <>
    <h3>Graphic Design Packages</h3>
    <p>Konten spesifik untuk Graphic Design...</p>
  </>
);

// Package 2D Animation
const Package2DAnimation = () => (
  <>
    <h3>2D Animation Packages</h3>
    <p>Konten spesifik untuk 2D Animation...</p>
  </>
);

export default App;
