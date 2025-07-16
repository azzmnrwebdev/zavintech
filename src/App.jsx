import "./assets/css/index.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Phone from "./assets/images/phone.PNG";
import Container from "react-bootstrap/Container";
import Dashboard from "./assets/images/dashboard.jpg";
import Mobile from "./assets/images/services/mobile.svg";
import Website from "./assets/images/services/website.svg";
import UiUxDesign from "./assets/images/services/uiux.svg";
import Animation from "./assets/images/services/animation.svg";
import VideoEditing from "./assets/images/services/video-editing.svg";
import GraphicDesign from "./assets/images/services/graphic-design.svg";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="fixed-top py-3">
        <Container>
          <Navbar.Brand href="/">zavintech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-3 mt-lg-0">
              <Nav.Link href="#services">Our Services</Nav.Link>
              <Nav.Link href="#">Project</Nav.Link>
              <Nav.Link href="#packages">Plans and Rate</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
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
                Explore How Websites & Animation Elevate Your Brand.
              </h1>
              <p className="description mb-4 text-sm-center text-lg-start">
                Zavintech helps your businesses grow by providing professional
                websites, smart e-commerce solutions, and creative animations to
                strengthen your online presence.
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
                        src={Mobile}
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
                        src={Website}
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
                        src={UiUxDesign}
                        width="100%"
                        height="100%"
                        alt="UI/UX Design"
                      />
                    </div>
                    <h5 className="card-title">UI/UX Design</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
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
                        src={VideoEditing}
                        width="100%"
                        height="100%"
                        alt="Video Editing"
                      />
                    </div>
                    <h5 className="card-title">Video Editing</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
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
                        src={GraphicDesign}
                        width="100%"
                        height="100%"
                        alt="Graphic Design"
                      />
                    </div>
                    <h5 className="card-title">Graphic Design</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
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
                        src={Animation}
                        width="100%"
                        height="100%"
                        alt="2D Animation"
                      />
                    </div>
                    <h5 className="card-title">2D Animation Production</h5>
                    <p className="card-text">
                      We don't just build your website or app — we also help you
                      create visuals and animations to make your brand stand
                      out.
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

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
