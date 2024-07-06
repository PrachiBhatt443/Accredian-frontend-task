import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
} from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Add } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1A1A1A', 
        color: '#F5F5F5', 
        py: 4, 
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', 
        padding: 2, 
        borderRadius: 2, 
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ 
          flexGrow: 1,
          textAlign: 'left',
        }}
      >
        accredian
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end', 
        }}
      >
        <Button
          variant="contained"
          color="primary"
          href="#"
          sx={{ mb: 1 }} 
        >
          Schedule a Call
        </Button>
        <Typography
          variant="body1"
          component="p"
        >
          Speak with our Learning Advisor
        </Typography>
      </Box>
    </Box>

        {/* Horizontal White Line */}
        <Divider sx={{ my: 4, backgroundColor: '#FFFFFF', height: '2px' }} />

        <Grid container spacing={3}>
          {/* Programs Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="#F5F5F5" gutterBottom>
              Programs
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Data Science & AI" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Product Management" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Business Analytics" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Digital Transformation" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Business Management" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Management" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Strategy & Leadership" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Senior Management" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Fintech" />
                <IconButton color="inherit">
                  <Add />
                </IconButton>
              </ListItem>
            </List>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} md={7}>
            <Typography variant="h6" color="#F5F5F5" gutterBottom>
              Contact Us
            </Typography>
            <List>
              <ListItem>
                <Link href="mailto:admissions@accredian.com" color="#E0E0E0" underline="hover">
                  Email us (For Data Science Queries): admissions@accredian.com
                </Link>
              </ListItem>
              <ListItem>
                <Link href="mailto:pm@accredian.com" color="#E0E0E0" underline="hover">
                  Email us (For Product Management Queries): pm@accredian.com
                </Link>
              </ListItem>
              <ListItem>
                <Link href="tel:+919079653292" color="#E0E0E0" underline="hover">
                  Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
                </Link>
              </ListItem>
              <ListItem>
                <Link href="tel:+919625811095" color="#E0E0E0" underline="hover">
                  Product Management Admission Helpline: +91 9625811095
                </Link>
              </ListItem>
              <ListItem>
                <Link href="tel:+917969322507" color="#E0E0E0" underline="hover">
                  Enrolled Student Helpline: +91 7969322507
                </Link>
              </ListItem>
              <ListItem>
                <Typography color="#E0E0E0">
                  Office Address: 4th Floor, Phase IV, Udyog Vihar, Sector 18, Gurugram, 122015
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6" color="#F5F5F5" gutterBottom sx={{ mt: 4 }}>
                  Follow Us
                </Typography>
              </ListItem>
              <ListItem>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <IconButton color="inherit" href="https://www.facebook.com">
                    <Facebook />
                  </IconButton>
                  <IconButton color="inherit" href="https://twitter.com">
                    <Twitter />
                  </IconButton>
                  <IconButton color="inherit" href="https://www.linkedin.com">
                    <LinkedIn />
                  </IconButton>
                  <IconButton color="inherit" href="https://www.instagram.com">
                    <Instagram />
                  </IconButton>
                </Stack>
              </ListItem>
            </List>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color="#F5F5F5" gutterBottom>
              About
            </Typography>
            <List>
              <ListItem>
                <Link href="#" color="#E0E0E0" underline="hover">
                  Admission Policy
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="#E0E0E0" underline="hover">
                  Referral Policy
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="#E0E0E0" underline="hover">
                  Privacy Policy
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="#E0E0E0" underline="hover">
                  Terms Of Service
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="#E0E0E0" underline="hover">
                  Why Accredian
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="#E0E0E0" underline="hover">
                  Master FAQs
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
          }}
        >
          <Typography variant="body2" color="#E0E0E0">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
