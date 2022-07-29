import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { AppBar } from '@material-ui/core';
import { Container, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start"
          color="inherit" aria-laabel="menu">
            <MenuIcon />
          </IconButton>
<Typography variant="h6">Surfing</Typography>
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
