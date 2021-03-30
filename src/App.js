import './App.css';
import { Container, Tooltip, Typography, Grid } from '@material-ui/core';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import 'fontsource-roboto';

function App() {

  return (
    <Container className="App" maxWidth='lg'>
      <div className='nav' id='nav'>
        <a href='#about-me'>About</a>
        <a href='#family'>Family</a>
        <a href='#school'>School</a>
        <a href='#work'>Work</a>
        <a href='#hmu'>Contact</a>
      </div>
      <Grid container spacing={1}>
        <Grid item className='hero' xs={12} sm={12} md={12} lg={12}>
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
      <div>
        Created with React 
        <img src='./logo192.png' alt='react logo' style={{ height: 50 }}/>
        and Material UI 
        <img src='./Material_ui.png' alt='material ui logo' style={{ height: 50 }}/>
      </div>
    </Container>
  );
}

export default App;
