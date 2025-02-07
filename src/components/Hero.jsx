import React from 'react';
import { Container, Tabs, Tab, Box, Grid , useMediaQuery , useTheme} from '@mui/material';
import ReferralFormModal from './ReferralFormModal';
import ReferEarn from './ReferEarn';
import Benefits from './Benefits';
import FAQ from './FAQ';
import Support from './Support';
import HowDoIRefer from './HowDoIRefer';

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const theme = useTheme();
  // Create refs for each section to scroll to
  const referEarnRef = React.useRef(null);
  const benefitsRef = React.useRef(null);
  const faqRef = React.useRef(null);
  const supportRef = React.useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Container sx={{ textAlign: 'center', marginTop: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          width: '100%',
          '& .MuiTabs-flexContainer': {
            // flexDirection: isMobile ? 'column' : 'row',
            
            justifyContent: 'center',
          },
          '& .MuiTab-root': {
            minWidth: 'unset',
            flex: isMobile ? '1 1 auto' : 'none',
            padding: isMobile ? '8px 0' : '12px 16px',
          },
        }}
      >
        <Tab label="Refer & Earn" />
        <Tab label="Benefits" />
        <Tab label="FAQ" />
        <Tab label="Support" />
      </Tabs>
    </Container>
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div ref={referEarnRef}>
              <ReferEarn handleOpen={handleOpen} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <HowDoIRefer />
          </Grid>
          <Grid item xs={12}>
            <div ref={benefitsRef}>
              <Benefits />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div ref={faqRef}>
              <FAQ />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div ref={supportRef}>
              <Support />
            </div>
          </Grid>
        </Grid>
      </Box>

      <ReferralFormModal open={open} handleClose={handleClose} />
    </>
  );
};

export default HeroSection;
