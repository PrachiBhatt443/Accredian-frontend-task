import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Mobile view breakpoint

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ mr: 2, fontWeight: 'bold' }}>
            accredian
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

        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit">Refer & Earn</Button>
            <Button color="inherit">Resources</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Login</Button>
            <Button variant="contained" sx={{ ml: 1, backgroundColor: 'whitesmoke', color: '#1976d2' }}>
              Sign Up for Free
            </Button>
          </Box>
        ) : (
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Refer & Earn" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Resources" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button>
              <Button variant="contained" sx={{ width: '100%', backgroundColor: 'whitesmoke', color: '#1976d2' }}>
                Sign Up for Free
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
