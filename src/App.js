import './App.css';
import { useEffect, useState } from 'react';
import { Container, 
          Tooltip, 
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
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import profileImage from './img/Profile_Image.jpg'
import materialUiLogo from './img/Material_ui.png'
import certificate from './files/CareerFoundry_Certificate_Trevor Allen.pdf'

// used for the animations
import lottie from 'lottie-web';
import reactLogo from './react-logo.json';
import contactMe from './contactMe.json';

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
          style={{ marginRight: '10px' }}
          startIcon={<GetAppRoundedIcon/>}
          download
          href='./Public/Allen_Trevor_Resume.pdf'
        >
          My Resume
        </Button>
        <a href='#about-me' className='nav-item'>About</a>
        <a href='#work' className='nav-item'>Work</a>
        <a href='#school' className='nav-item'>School</a>
        <a href='#family' className='nav-item'>Family</a>
        <a href='#hmu' className='nav-item'>Contact</a>
      </div>

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
            <a 
              href='./Public/Allen_Trevor_Resume.pdf' 
              className='nav-item' 
              download
            >
              <Button 
                variant='contained' 
                color='primary' 
                style={{ marginRight: '10px' }}
                startIcon={<GetAppRoundedIcon/>}
                download
                href='./Public/Allen_Trevor_Resume.pdf'
              >
                Resume
              </Button>
            </a>
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
            <Grid item className='work-grid-item' xs={12} sm={12} md={12} lg={12}>
              <Card>
                <img src={materialUiLogo} alt='test' style={{ height: '80px' }}/>
                <Typography variant='h6'>
                  MyFlix React
                </Typography>
                <Typography variant='body1'>
                  A project I created in React to be the front-end of an API I built.
                </Typography>
              </Card>
            </Grid>
            <Grid item className='work-grid-item' xs={12} sm={12} md={12} lg={12}>
              <Card><img src={materialUiLogo} alt='test' style={{ height: '80px' }}/>
                <Typography variant='h6'>
                  MyFlix Angular
                </Typography>
                <Typography variant='body1'>
                  A project I created in Angular to be the front-end of an API I built.
                </Typography>
              </Card>
            </Grid>
            <Grid item className='work-grid-item' xs={12} sm={12} md={12} lg={12}>
              <Card><img src={materialUiLogo} alt='test' style={{ height: '80px' }}/>
                <Typography variant='h6'>
                  Meet-Up
                </Typography>
                <Typography variant='body1'>
                  A project I created in React to show "Meet-up" type events based on location.
                  The app uses mock data and integrates with the Google Calendar API.
                </Typography>
              </Card>
            </Grid>
            <Grid item className='work-grid-item' xs={12} sm={12} md={12} lg={12}>
              <Card><img src={materialUiLogo} alt='test' style={{ height: '80px' }}/>
                <Typography variant='h6'>
                  React-Native Chat
                </Typography>
                <Typography variant='body1'>
                  A Chat app I created in React-Native. It uses the Gifted Chat library
                  and allows users to share images from their device and their current location.
                </Typography>
              </Card>
            </Grid>
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
          <img src='https://dummyimage.com/16:9x1080' alt='placeholder' style={{ width: '100%' }}/>
          <Typography variant='h4'>
            Career Foundry
          </Typography>
          <Typography variant='h6'>
            Full-Stack Web Development Certification
          </Typography>
          <img src={certificate} alt='certificate' style={{ width: '100%' }}/>
        </Grid>

        <Grid className='family' id='family' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>F</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Family</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          My family means everything to me. I wouldn't be who I am today without them.
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

          <a href='mailto:trevor2492@gmail.com'>
            <Tooltip title='Email to: trevor2492@gmail.com'>
              <MailRoundedIcon style={{ color: 'black' }}/>
            </Tooltip>
          </a><br />
          
          <a href='./Allen_Trevor_Resume.pdf' download>
            <Tooltip title='Download My Resume'>
              <InsertDriveFileRoundedIcon style={{ color: 'black' }}/>
            </Tooltip>
          </a><br />

          <a 
            href='https://www.linkedin.com/in/trevor-allen-64b024a6/' 
            target='blank'
          >
            <Tooltip title='My LinkedIn'>
              <LinkedInIcon style={{ color: 'black' }}/>
            </Tooltip>
          </a><br />

          <a 
            href='https://github.com/Trevor2492' 
            target='blank'
          >
            <Tooltip title='My GitHub'>
              <GitHubIcon style={{ color: 'black' }}/>
            </Tooltip>
          </a>
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
