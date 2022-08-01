import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { AppBar, Paper, Grid } from '@material-ui/core';
import { Container, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9)
  }
}))

function App() {
  const classes = useStyles();

  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start"
          color="inherit" aria-laabel="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
<Typography variant="h6" className={classes.title}>Surfing</Typography>
<Box mr={3}>
  <Button color="inherit" variant="outlined">Log In</Button>
</Box>
<Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container >
      </AppBar>
    
    <main>
    <Paper className={classes.mainFeaturesPost}
      style={{ backgroundImage: `url(https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/surfer_0.jpg)`}}>
    <Container fixed>
      <div className={classes.overlay}/>
    <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturesPostContent}>
            <Typography
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
            >
              Surfing life
            </Typography>
            <Typography
            component="h5"
            color="inherit"
            paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. 
            </Typography>
            <Button variant='contained' color="secondary">
              Learn More
            </Button>
          </div>
        </Grid>
      </Grid>
      </Container>
      </Paper>
   
      

     
    </main>
    </>
  );
}

export default App;
