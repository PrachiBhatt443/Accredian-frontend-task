import React, { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import ReferralFormModal from './ReferralFormModal';  
import referImage from '../assets/referImage.png';  

const ReferEarn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(238, 245, 255, 1)',
        boxShadow: '0px 4px 65px 1px rgba(0, 7, 43, 0.21)',
        opacity: 1,
        borderRadius: 2,
        padding: '8px 49px',
        width: '100%',
        maxWidth: 1000,
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '16px',
        }}
      >
        <Typography variant="h3" component="h1">
          Let's Learn
        </Typography>
        <Typography variant="h3" component="h1">
          & Earn!
        </Typography>
        <Typography variant="h5" component="p" paragraph>
          Refer your friends and earn rewards when they make a purchase!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Refer Now
        </Button>
      </Box>
      <Box
        sx={{
          width: 814,
          height: 450,
          backgroundImage: `url(${referImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 1,
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ReferralFormModal open={open} handleClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default ReferEarn;
