// src/components/ReferEarnPage.jsx
import React, { useState } from 'react';
import { Container, Typography, Button, Modal, Box } from '@mui/material';
import ReferralFormModal from './ReferralFormModal';

const ReferEarnPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h3" gutterBottom>Refer & Earn</Typography>
        <Typography variant="h5" gutterBottom>Refer a friend and earn rewards</Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>Refer Now</Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 400 }}>
          <ReferralFormModal onClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default ReferEarnPage;
