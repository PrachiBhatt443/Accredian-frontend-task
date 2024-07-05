import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import ReferralFormModal from './ReferralFormModal';

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Refer & Earn!
      </Typography>
      <Typography variant="h5" component="p" paragraph>
        Refer your friends and earn rewards when they make a purchase!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <ReferralFormModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default HeroSection;
