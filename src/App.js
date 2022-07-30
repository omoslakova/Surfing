import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { AppBar } from '@material-ui/core';
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
  }
}))

function App() {
  const classes = useStyles();

  return (
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
      </Container>
    </AppBar>
  );
}

export default App;
