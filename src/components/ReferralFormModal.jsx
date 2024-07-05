// // src/components/ReferralFormModal.jsx
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const ReferralFormModal = ({ open, handleClose }) => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/referral`, {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      });
      alert('Referral sent successfully!');
      setReferrerName('');
      setReferrerEmail('');
      setRefereeName('');
      setRefereeEmail('');
      handleClose();
    } catch (error) {
      console.error('Error sending referral:', error);
      alert('Failed to send referral. Please try again.');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            fullWidth
            margin="normal"
            value={referrerName}
            onChange={(e) => setReferrerName(e.target.value)}
          />
          <TextField
            label="Your Email"
            fullWidth
            margin="normal"
            type="email"
            value={referrerEmail}
            onChange={(e) => setReferrerEmail(e.target.value)}
          />
          <TextField
            label="Friend's Name"
            fullWidth
            margin="normal"
            value={refereeName}
            onChange={(e) => setRefereeName(e.target.value)}
          />
          <TextField
            label="Friend's Email"
            fullWidth
            margin="normal"
            type="email"
            value={refereeEmail}
            onChange={(e) => setRefereeEmail(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Send Referral
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default ReferralFormModal;
