import React from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import ReferralFormModal from './ReferralFormModal';
import ReferEarn from './ReferEarn';
import Benefits from './Benefits';
import FAQ from './FAQ';
import Support from './Support';
import Navbar from './Navbar';
import HowDoIRefer from './HowDoIRefer';

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  // Create refs for each section to scroll to
  const referEarnRef = React.useRef(null);
  const benefitsRef = React.useRef(null);
  const faqRef = React.useRef(null);
  const supportRef = React.useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        referEarnRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 1:
        benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        faqRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        supportRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <Container sx={{ textAlign: 'center', marginTop: 2 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Refer & Earn" />
          <Tab label="Benefits" />
          <Tab label="FAQ" />
          <Tab label="Support" />
        </Tabs>
      </Container>
      <Box sx={{ marginTop: 4 }}>
        <div ref={referEarnRef}>
          <ReferEarn handleOpen={handleOpen} />
        </div>
        <HowDoIRefer/>
        <div ref={benefitsRef}>
          <Benefits />
        </div>
        <div ref={faqRef}>
          <FAQ />
        </div>
        <div ref={supportRef}>
          <Support />
        </div>
      </Box>

      <ReferralFormModal open={open} handleClose={handleClose} />

    </>
  );
};

export default HeroSection;
