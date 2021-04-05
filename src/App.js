import './App.css';
import { Container, Tooltip, Typography, Grid, Fab } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUp';
import { useEffect, useState } from 'react';

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


  return (
    <Container className="App" maxWidth='lg'>
      <div className='nav' id='nav'>
        <a href='#about-me' className='nav-item'>About</a>
        <a href='#family' className='nav-item'>Family</a>
        <a href='#school' className='nav-item'>School</a>
        <a href='#work' className='nav-item'>Work</a>
        <a href='#hmu' className='nav-item'>Contact</a>
      </div>
      <Grid container spacing={1}>
        <Grid item className='hero' id='hero' xs={12} sm={12} md={12} lg={12}>
          <Typography variant='h1'>T</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Trevor</Typography>
        </Grid>
        <Grid item className='about-me' id='about-me' xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>A</Typography>
          <Typography variant='h3'>little</Typography>
          <Typography variant='h3'>about</Typography>
          <Typography variant='h1'>Me</Typography>
        </Grid>
        <Grid className='kid' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h2'>I'm a 90's Kid...</Typography>
          <Typography>Pokemon</Typography>
          <Typography>Hot Wheels</Typography>
          <Typography>N64</Typography>
          <Typography>Tomigachi...(remember those?)</Typography>
          <Typography>Born and raised in California</Typography>
          <Typography>Can call many different places "home", including abroad</Typography>
        </Grid>
        <Grid className='family' id='family' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>F</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Family</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          Family images...
        </Grid>
        <Grid className='school' id='school' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>S</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>School</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          BYU-I / Careerfoundry
        </Grid>
        <Grid className='work' id='work' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>W</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Work</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          Portfolio display of work
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
        Created with React 
        <div id='react-logo' alt='react logo' style={{ height: 50 }}/>
        and Material UI 
        <img src='./Material_ui.png' alt='material ui logo' style={{ height: 50 }}/>
      </div>

      {/* renders the FAB */}
      { scrollY && 
        <a href='#nav'>
          {/* StylesProvider overrides the material ui component styles in CSS */}
          <StylesProvider injectFirst>
            <Fab color='primary' className='fab'><KeyboardArrowUpRoundedIcon/></Fab>
          </StylesProvider>
        </a> 
      }
    </Container>
  );
}

export default App;
