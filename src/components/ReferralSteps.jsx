import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';  
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';  
import ShareIcon from '@mui/icons-material/Share';
import referImage from '../assets/how.png';

const steps = [
  {
    icon: <ContactMailIcon sx={{ fontSize: 40, color: '#1976d2' }} />,  
    title: 'Submit Referrals',
    description: 'Submit referrals easily via our website’s referral section.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#1976d2' }} />,  
    title: 'Earn Rewards',
    description: 'Earn rewards once your referral joins an Accredian program.',
  },
  {
    icon: <ShareIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Receive Bonus',
    description: 'Both parties receive a bonus 30 days after program enrollment.',
  },
];


const ReferralSteps = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${referImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 2,
        textAlign: 'center',
        maxWidth: 1200,
        height: 400,
        margin: 'auto',
        mt: 8,
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
        padding: 3,
      }}
    >
      <Grid container spacing={22} justifyContent="center">
        {steps.map((step, index) => (
          <Grid
            item
            xs={12}
            sm={3}
            key={index}
            container
            direction="column"
            alignItems="center"
            sx={{ textAlign: 'center' }}
          >
            {step.icon}
            <Typography
              variant="h6"
              component="h3"
              sx={{ mt: 2, fontWeight: 'bold' }}
            >
              {step.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1, maxWidth: 200 }}
            >
              {step.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReferralSteps;
