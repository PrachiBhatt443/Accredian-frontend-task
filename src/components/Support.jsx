import React, { useState, useRef } from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import { Email, Person, Message } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import call from '../assets/call.png';

const Support = () => {
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGetInTouchClick = () => {
    setFormVisible(!formVisible);
    if (!formVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(45deg, #4A90E2 30%, #50E3C2 90%)',
        color: 'white',
        padding: isMobile ? '20px' : '40px',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          direction={isMobile ? 'column' : 'row'}
          alignItems="center"
        >
          <Grid item xs={12} sm="auto">
            <Box
              sx={{
                width: 72,
                height: 72,
                backgroundImage: `url(${call})`,
                backgroundSize: 'cover',
                borderRadius: 1,
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid item xs={12} sm>
            <Typography
              variant="h5"
              component="h2"
              textAlign={isMobile ? 'center' : 'left'}
              gutterBottom
            >
              Want to delve deeper into the program?
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign={isMobile ? 'center' : 'left'}
              paragraph
            >
              Share your details to receive expert insights from our program team!
            </Typography>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Box textAlign={isMobile ? 'center' : 'left'}>
              <Button
                onClick={handleGetInTouchClick}
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  ':hover': {
                    backgroundColor: 'rgba(80, 203, 255)',
                  },
                }}
              >
                {formVisible ? 'Hide Form' : 'Get in Touch'}
              </Button>
            </Box>
          </Grid>

          {formVisible && (
            <Grid item xs={12}>
              <Box
                ref={formRef}
                component="form"
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: '20px',
                  maxWidth: '90%',
                  margin: '0 auto',
                }}
              >
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  color="primary"
                  InputProps={{
                    startAdornment: <Person sx={{ color: 'primary.main' }} />,
                    style: { backgroundColor: 'white', borderRadius: '5px' },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  color="primary"
                  InputProps={{
                    startAdornment: <Email sx={{ color: 'primary.main' }} />,
                    style: { backgroundColor: 'white', borderRadius: '5px' },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  color="primary"
                  multiline
                  rows={4}
                  InputProps={{
                    startAdornment: <Message sx={{ color: 'primary.main' }} />,
                    style: { backgroundColor: 'white', borderRadius: '5px' },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    ':hover': {
                      backgroundColor: '#0076D2',
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Support;
