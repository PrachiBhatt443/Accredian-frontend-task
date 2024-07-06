import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ mr: 2, fontWeight: 'bold' }}>
            LOGO
          </Typography>
          <Button
            color="inherit"
            onClick={handleMenuOpen}
            endIcon={<ArrowDropDownIcon />} 
          >
            Course
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Course 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Course 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Course 3</MenuItem>
          </Menu>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit">Refer & Earn</Button>
          <Button color="inherit">Resources</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Login</Button>
          <Button  variant="contained" sx={{ ml: 1,backgroundColor:"whitesmoke",color:"#1976d2" }}>
            Sign Up for Free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
