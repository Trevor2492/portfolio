import "./App.css";
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Fab,
  Card,
  Menu,
  Button,
  MenuItem,
} from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowUpRoundedIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import profileImage from "./img/Profile_Image.jpg";
import myFlixReact from "./img/myflix-react.png";
import certificate from "./img/certificate.png";
import byuiLogo from "./img/byui.png";
import squiggle from "./img/squiggle.png";
import swirl from "./img/swirl.png";
import nineties from "./img/90s.png";
import triangle from "./img/triangle.svg";
import diamond from "./img/diamond.svg";
import checkingCalculatorImg from "./img/checking calculator 2.png";
import resume from "./files/Trevor_Allen_Resume.pdf";
import ConnexusWork from "./connexus-work";
import ScrollToTop from "./ScrollToTop";

// used for the animations
import lottie from "lottie-web";
import reactLogo from "./react-logo.json";
import contactMe from "./contactMe.json";
import "animate.css/animate.min.css";

import "fontsource-roboto";

function App() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }

    watchScroll();

    //react logo animation
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    });

    //contact me animation
    lottie.loadAnimation({
      container: document.querySelector("#hmu-2"),
      animationData: contactMe,
    });

    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  // mobile menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      {/* ensure the window is scrolled to top on route changes */}
      <ScrollToTop />
      <StylesProvider injectFirst>
        <Routes>
          <Route path="/connexus-work" element={<ConnexusWork />} />
          <Route
            path="/portfolio"
            element={
              <Container className="App" maxWidth="lg">
                <div className="nav" id="nav">
                  <Button
                    variant="contained"
                    color="primary"
                    className="resume-button"
                    startIcon={<GetAppRoundedIcon />}
                    href={resume}
                    download
                  >
                    My Resume
                  </Button>
                  <a href="#about-me" className="nav-item">
                    About
                  </a>
                  <a href="#work" className="nav-item">
                    Work
                  </a>
                  <a href="#education" className="nav-item">
                    Education
                  </a>
                  <a href="#hmu" className="nav-item">
                    Contact
                  </a>
                </div>

                {/* displays the hamburger menu on mobile. Is hidden on large screens */}
                <div className="hamburger" id="hamburger">
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MenuRoundedIcon />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: "10px" }}
                        startIcon={<GetAppRoundedIcon />}
                        href={resume}
                        download
                      >
                        Resume
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a href="#about-me" className="nav-item">
                        About
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a href="#work" className="nav-item">
                        Work
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a href="#education" className="nav-item">
                        Education
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a href="#hmu" className="nav-item">
                        Contact
                      </a>
                    </MenuItem>
                  </Menu>
                </div>

                <Grid container spacing={1}>
                  <Grid
                    item
                    className="hero"
                    id="hero"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                  >
                    <img src={nineties} className="nineties" alt="90s" />
                    <Typography variant="h1">T</Typography>
                    <Typography variant="h3">is</Typography>
                    <Typography variant="h3">for</Typography>
                    <Typography variant="h1">Trevor</Typography>
                    <video
                      autoPlay
                      muted
                      loop
                      id="background-video"
                      src="src/img/cx-bio_read_more.MP4"
                    />
                  </Grid>
                  <Grid
                    item
                    className="hero-2"
                    id="hero-2"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                  >
                    <img
                      src={profileImage}
                      className="profileImg"
                      alt="trevor"
                    />
                  </Grid>

                  <Grid
                    item
                    className="about-me"
                    id="about-me"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                  >
                    <img src={squiggle} className="squiggle" alt="squiggle" />
                    <img src={triangle} className="triangle" alt="triangle" />
                    <Typography variant="h1">A</Typography>
                    <Typography variant="h3">little</Typography>
                    <Typography variant="h3">about</Typography>
                    <Typography variant="h1">Me</Typography>
                  </Grid>
                  <Grid className="kid" item xs={12} sm={12} md={12} lg={6}>
                    <img src={swirl} className="swirl" alt="swirl" />
                    <Typography variant="h2">
                      I'm a{" "}
                      <span className="nineties-kid" style={{ marginRight: 8 }}>
                        90's
                      </span>{" "}
                      Kid...
                    </Typography>
                    <Typography variant="h6">
                      Pokemon, Hot Wheels, N64, Tomigachi...(remember those?)
                    </Typography>
                    <Typography className="kid-2">
                      <p>
                        I was born and raised in California with strong ethical
                        and moral standards. I was taught to work hard, stay
                        humble, and help other people.
                      </p>
                      <p>
                        I'm a Full-Stack developer with ~5 years of experience,
                        with my most recent work being on the Digital Experience
                        team at Connexus Credit Union.
                      </p>
                    </Typography>
                    <img src={diamond} className="diamond" alt="diamond" />
                  </Grid>

                  <Grid
                    className="work"
                    id="work"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                  >
                    <Typography variant="h1">W</Typography>
                    <Typography variant="h3">is</Typography>
                    <Typography variant="h3">for</Typography>
                    <Typography variant="h1">Work</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Grid container className="work-grid-container">
                      <div item className="work-grid-item">
                        <Card>
                          <img
                            src={checkingCalculatorImg}
                            alt="checking calculator"
                            style={{ width: "100%" }}
                          />
                          <Typography variant="h5">
                            My Recent Work at Connexus
                          </Typography>
                          <Typography variant="body1">
                            Check out my dynamic rate and investment
                            calculators, interactive components, and more.
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to={"/connexus-work"}
                          >
                            See more
                          </Button>
                          <br />
                          <Button
                            variant="text"
                            color="primary"
                            href="https://www.connexuscu.org"
                            target="blank"
                          >
                            ConnexusCU.org
                          </Button>
                        </Card>
                      </div>
                      <div item className="work-grid-item">
                        <Card>
                          <img
                            src={myFlixReact}
                            alt="test"
                            style={{ width: "100%" }}
                          />
                          <Typography variant="h5">Other Projects</Typography>
                          <Typography variant="body1">
                            Movie database, API, and respective node app.
                            Meet-up style app with events and locations filter.
                            Real-time chat app with rooms and private messaging.
                            Explore and demo them on GitHub.
                          </Typography>
                          <Button
                            variant="outlined"
                            color="primary"
                            href="https://github.com/Trevor2492?tab=repositories"
                            target="blank"
                          >
                            My GitHub
                          </Button>
                        </Card>
                      </div>

                      <div className="more-projects">
                        <div>
                          <Typography>
                            <text>(I'm particularly fond of my </text>
                            <a
                              href="https://trevor2492.github.io/kanye-quotes/"
                              target="blank"
                              style={{ textDecoration: "underline" }}
                            >
                              Kanye Quotes
                            </a>
                            <text> app. *Caution: Language*)</text>
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid
                    className="education"
                    id="education"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                  >
                    <Typography variant="h1">E</Typography>
                    <Typography variant="h3">is</Typography>
                    <Typography variant="h3">for</Typography>
                    <Typography variant="h1">Education</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    style={{ padding: "20px" }}
                  >
                    <Typography variant="h4">Career Foundry</Typography>
                    <Typography variant="h6">
                      Full-Stack Web Development Certification
                    </Typography>
                    <a href="https://careerfoundry.com" target="blank">
                      <img
                        src={certificate}
                        alt="certificate"
                        style={{ width: "100%", marginBottom: "3rem" }}
                      />
                    </a>
                    <Typography variant="h4">
                      Brigham Young University - Idaho
                    </Typography>
                    <Typography variant="h6">
                      Bachelor's of Business Management - Marketing
                    </Typography>
                    <img
                      src={byuiLogo}
                      alt="Brigham Young University-Idaho"
                      style={{ width: "50%" }}
                    />
                  </Grid>

                  <Grid
                    className="hmu"
                    id="hmu"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                  >
                    <Typography variant="h1">H</Typography>
                    <Typography variant="h3">is</Typography>
                    <Typography variant="h3">for</Typography>
                    <Typography variant="h1">HMU</Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <a href="mailto:trevor2492@gmail.com">
                      <div id="hmu-2" style={{ height: 400 }} />
                    </a>

                    <Button
                      href="mailto:trevor2492@gmail.com"
                      variant="contained"
                      color="primary"
                      startIcon={<MailRoundedIcon />}
                    >
                      Email
                    </Button>
                    <br />

                    <Button
                      href={resume}
                      download
                      variant="contained"
                      color="primary"
                      startIcon={<GetAppRoundedIcon />}
                    >
                      My Resume
                    </Button>
                    <br />

                    <Button
                      href="https://www.linkedin.com/in/trevor-allen-64b024a6/"
                      target="blank"
                      variant="contained"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                    >
                      LinkedIn
                    </Button>
                    <br />

                    <Button
                      href="https://github.com/Trevor2492"
                      target="blank"
                      variant="contained"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                  </Grid>
                </Grid>

                <div className="footer" id="footer">
                  <div style={{ margin: 15, color: "#000" }}>
                    trevor2492@gmail.com
                  </div>
                  <div>Created with React</div>
                  <div
                    id="react-logo"
                    alt="react logo"
                    style={{ height: 50 }}
                  />
                </div>

                {/* renders the FAB */}
                {scrollY > 0 && (
                  <a href="#nav">
                    {/* StylesProvider overrides the material ui component styles in CSS */}
                    <StylesProvider injectFirst>
                      <Fab color="primary" className="fab">
                        <KeyboardArrowUpRoundedIcon />
                      </Fab>
                    </StylesProvider>
                  </a>
                )}
              </Container>
            }
          />
        </Routes>
      </StylesProvider>
    </Router>
  );
}

export default App;
