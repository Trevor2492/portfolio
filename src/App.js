import './App.css';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import 'fontsource-roboto';


function App() {



  return (
    <Container className="App" maxWidth='lg'>
      <Grid container spacing={1}>
        <Grid item className='hero' xs={12} sm={12} md={12} lg={12}>
          <Typography variant='h1'>T</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Trevor</Typography>
        </Grid>
        <Grid item className='about-me' xs={12} sm={12} md={12} lg={6}>
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
        <Grid className='family' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>F</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Family</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          Family images...
        </Grid>
        <Grid className='school' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>S</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>School</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          BYU-I / Careerfoundry
        </Grid>
        <Grid className='work' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>W</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>Work</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          Portfolio display of work
        </Grid>
        <Grid className='hmu' item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h1'>H</Typography>
          <Typography variant='h3'>is</Typography>
          <Typography variant='h3'>for</Typography>
          <Typography variant='h1'>HMU</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <a href='mailto:trevor2492@gmail.com'>trevor2492@gmail.com</a><br />
          <a href='./Allen_Trevor_Resume.pdf' download>Download My Resume</a><br />
          <a href='https://www.linkedin.com/in/trevor-allen-64b024a6/' target='blank'>LinkedIn</a><br />
          <a href='https://github.com/Trevor2492' target='blank'>GitHub</a>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
