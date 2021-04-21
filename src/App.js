import './App.css';
import { useEffect, useState } from 'react';
import { Container, 
          Typography, 
          Grid, 
          Fab, 
          Card, 
          Menu, 
          Button,
          MenuItem
          } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import profileImage from './img/Profile_Image.jpg'
import materialUiLogo from './img/Material_ui.png'
import myFlixReact from './img/myflix-react.png'
import myFlixAngular from './img/myflix-angular.png'
import meet from './img/meet.png'
import chat from './img/chat.png'
import family from './img/family.jpg'
import certificate from './img/certificate.png'
import byuiLogo from './img/byui.png'
import resume from './files/Allen_Trevor_Resume.pdf'

// used for the animations
import lottie from 'lottie-web';
import reactLogo from './react-logo.json';
import contactMe from './contactMe.json';
import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';

import 'fontsource-roboto';

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
      container: document.querySelector('#react-logo'),
      animationData: reactLogo,
    });

    //contact me animation
    lottie.loadAnimation({
      container: document.querySelector('#hmu-2'),
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
    <StylesProvider injectFirst>
    <Container className="App" maxWidth='lg'>

      <div className='nav' id='nav'>
        <Button 
          variant='contained' 
          color='primary' 
          className='resume-button'
          startIcon={<GetAppRoundedIcon/>}
          href={resume}
          download
        >
          My Resume
        </Button>
        <a href='#about-me' className='nav-item'>About</a>
        <a href='#work' className='nav-item'>Work</a>
        <a href='#school' className='nav-item'>School</a>
        <a href='#family' className='nav-item'>Family</a>
        <a href='#hmu' className='nav-item'>Contact</a>
      </div>

      {/* <ScrollAnimation  >
        Some Text
      </ScrollAnimation> */}

      {/* displays the hamburger menu on mobile. Is hidden on large screens */}
      <div className='hamburger' id='hamburger'>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
              variant='contained' 
              color='primary' 
              style={{ marginRight: '10px' }}
              startIcon={<GetAppRoundedIcon/>}
              href={resume}
              download
            >
              Resume
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href='#about-me' className='nav-item'>About</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href='#work' className='nav-item'>Work</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href='#school' className='nav-item'>School</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href='#family' className='nav-item'>Family</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href='#hmu' className='nav-item'>Contact</a>
          </MenuItem>
        </Menu>
      </div>

      <Grid container spacing={1}>
        <Grid item className='hero' id='hero' xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>T</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Trevor</Typography>
        </Grid>
        <Grid item className='hero-2' id='hero-2' xs={12} sm={12} md={12} lg={6}>
          <img src={profileImage} className='profileImg' alt='trevor' />
        </Grid>

        <Grid item className='about-me' id='about-me' xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>A</Typography>
          <Typography variant='h3'>little</Typography>
          <Typography variant='h3'>about</Typography>
          <Typography variant='h1'>Me</Typography>
        </Grid>
        <Grid className='kid' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h2'>I'm a 90's Kid...</Typography>
          <Typography variant='h6'>
            Pokemon, Hot Wheels, N64, Tomigachi...(remember those?)
          </Typography>
          <Typography className='kid-2'>
            <p>
              I was born and raised in California with strong ethical and moral standards. 
              I was taught to work hard, stay humble, and to help other people in need whenever I could.
            </p>
            <p>
              At Brigham Young University-Idaho I studied mechanical and electrical engineering, 
              before ultimately shifting focus and changing my major to business management. 
              After graduating in the spring of 2018, I worked as a marketing program manager in Salt Lake City 
              where I gained valuable experience and insight into the working world. 
            </p>
            <p>
              I'm now a certified Full-Stack JavaScript developer with industry experience, 
              looking for opportunities to learn and grow my skillset and add value in my community.
            </p>
          </Typography>
        </Grid>

        <Grid className='work' id='work' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>W</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Work</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid container className='work-grid-container'>
            <div item className='work-grid-item'>
              <Card>
                <img src={myFlixReact} alt='test' style={{ width: '100%' }}/>
                <Typography variant='h5'>
                  MyFlix React
                </Typography>
                <Typography variant='body1'>
                  An app created with React to be the UI
                  of the movie database API that I built. Users can create an account, 
                  log-in, browse movies, save favorites, update and delete their account.
                  Uses MongoDB, Express, Node.js, and React.
                </Typography>
                <Button 
                  variant='contained' 
                  color='primary'
                  href='https://myflix-app.netlify.app'
                  target='blank'
                >
                  Demo
                </Button>
                <Button 
                  variant='contained' 
                  color='primary'
                  href='https://github.com/Trevor2492/myFlix-client'
                  target='blank'
                >
                  Code
                </Button>
              </Card>
            </div>
            <div item className='work-grid-item'>
              <Card><img src={myFlixAngular} alt='test' style={{ width: '100%' }}/>
                <Typography variant='h5'>
                  MyFlix Angular
                </Typography>
                <Typography variant='body1'>
                  An app created with Angular to be the UI
                  of the movie database API that I built. Users can create an account, 
                  log-in, browse movies, save favorites, update and delete their account.
                  Uses TypeScript, MongoDB, Express, Node.js, and Angular.
                </Typography>
                <Button 
                  variant='contained' 
                  color='primary'
                  href='https://trevor2492.github.io/myFlix-Client-Angular/welcome'
                  target='blank'
                >
                  Demo
                </Button>
                <Button 
                  variant='contained' 
                  color='primary'
                  href='https://github.com/Trevor2492/myFlix-Client-Angular'
                  target='blank'
                >
                  Code
                </Button>
              </Card>
            </div>
            <div item className='work-grid-item'>
              <Card><img src={meet} alt='test' style={{ width: '100%' }}/>
                <Typography variant='h5'>
                  Meet-Up
                </Typography>
                <Typography variant='body1'>
                  A project I created in React to show "Meet-up" type events based on user location.
                  The app uses mock data and integrates with the Google Calendar API and requires authentication.
                </Typography>
                <Button 
                  variant='contained' 
                  color='primary'
                  href='https://trevor2492.github.io/meet/'
                  target='blank'
                >
                  Demo
                </Button>
                <Button 
                  variant='contained' 
                  color='primary'
                  href='https://github.com/Trevor2492/meet'
                  target='blank'
                >
                  Code
                </Button>
              </Card>
            </div>
            <div item className='work-grid-item'>
              <Card><img src={chat} alt='test' style={{ width: '100%' }}/>
                <Typography variant='h5'>
                  React-Native Chat
                </Typography>
                <Typography variant='body1'>
                  A Chat app I created in React-Native. It uses the Gifted Chat library
                  and allows users to share images from their device and their current location. 
                  See the ReadMe in GitHub for demo.
                </Typography>
                <Button 
                  variant='contained' 
                  color='primary'
                  href='https://github.com/Trevor2492/Chat-app'
                  target='blank'
                >
                  Code
                </Button>
              </Card>
            </div>

            <div className='more-projects'>
              <div>
                <Typography variant='h5'>
                  See More Projects Here:
                </Typography>
                <Button 
                  href='https://github.com/Trevor2492?tab=repositories' 
                  target='blank'
                  variant='outlined'
                  color='primary'
                  style={{ marginTop: '10px' }}
                >
                  My GitHub
                </Button>
              </div>
              <br />
              <div>
                <Typography>
                  <text>(I'm particularly fond of my </text>
                    <a 
                      href='https://trevor2492.github.io/kanye-quotes/' 
                      target='blank'
                      style={{ textDecoration: 'underline' }}
                    >
                      Kanye Quotes
                    </a>
                  <text> app. *Caution: Language*)</text>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid className='school' id='school' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>S</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>School</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} style={{ padding: '20px' }}>
          <Typography variant='h4'>
            Brigham Young University - Idaho
          </Typography>
          <Typography variant='h6'>
            Bachelor's of Business Management - Marketing
          </Typography>
          <a href='https://www.byui.edu' target='blank'><img src={byuiLogo} alt='Brigham Young University-Idaho' style={{ width: '90%' }}/></a> 
          <Typography variant='h4'>
            Career Foundry
          </Typography>
          <Typography variant='h6'>
            Full-Stack Web Development Certification
          </Typography>
          <a href='https://careerfoundry.com' target='blank'><img src={certificate} alt='certificate' style={{ width: '100%' }}/></a>
        </Grid>

        <Grid className='family' id='family' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>F</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Family</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h6'>My family means everything to me. I wouldn't be who I am today without them.</Typography>
          <img src={family} alt='' style={{ width: '100%', borderRadius: '20px', marginTop: '10px' }}/>
        </Grid>
        <Grid className='hmu' id='hmu' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>H</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>HMU</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>

          <a href='mailto:trevor2492@gmail.com'>
            <div id='hmu-2' style={{ height: 400 }}/>
          </a>

            <Button href='mailto:trevor2492@gmail.com' variant='contained' color='primary' startIcon={<MailRoundedIcon/>}>
              Email
            </Button><br />
          
            <Button href={resume} download variant='contained' color='primary' startIcon={<GetAppRoundedIcon/>}>
              My Resume
            </Button><br />

            <Button 
              href='https://www.linkedin.com/in/trevor-allen-64b024a6/' 
              target='blank' 
              variant='contained' 
              color='primary' 
              startIcon={<LinkedInIcon/>}
            >
              LinkedIn
            </Button><br />

            <Button 
              href='https://github.com/Trevor2492' 
              target='blank'
              variant='contained' 
              color='primary' 
              startIcon={<GitHubIcon/>}
            >
              GitHub
            </Button>
        </Grid>
      </Grid>

      <div className='footer' id='footer'>
        <div>Created with React</div>
        <div id='react-logo' alt='react logo' style={{ height: 50 }}/>
        <div>and Material UI</div> 
        <img src={materialUiLogo} alt='material ui logo' style={{ height: 50 }}/>
      </div>

      {/* renders the FAB */}
      { scrollY > 0 && 
        <a href='#nav'>
          {/* StylesProvider overrides the material ui component styles in CSS */}
          <StylesProvider injectFirst>
            <Fab color='primary' className='fab'><KeyboardArrowUpRoundedIcon/></Fab>
          </StylesProvider>
        </a> 
      }
    </Container>
    </StylesProvider>
  );
}

export default App;
