import React, { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import ReferralSteps from './ReferralSteps';
import ReferralFormModal from './ReferralFormModal';  

const HowDoIRefer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        borderRadius: 2,
        textAlign: 'center',
        width: '100%',
        maxWidth: 1200,
        margin: 'auto',
        mt: 8,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        How Do I Refer?
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          mb: 3,
        }}
      >
        Refer your friends to our program and earn rewards! Simply fill out the form and share your referral link.
      </Typography>
      <ReferralSteps />
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          px: 3,
          py: 1.5,
          fontWeight: 'bold',
          borderRadius: 3,
          mt: 3,
        }}
      >
        Refer Now
      </Button>
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

export default HowDoIRefer;
