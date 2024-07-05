// src/components/ReferralForm.jsx

import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';

const ReferralForm = () => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!referrerName) newErrors.referrerName = 'Referrer Name is required';
    if (!referrerEmail || !/\S+@\S+\.\S+/.test(referrerEmail)) newErrors.referrerEmail = 'Valid Referrer Email is required';
    if (!refereeName) newErrors.refereeName = 'Referee Name is required';
    if (!refereeEmail || !/\S+@\S+\.\S+/.test(refereeEmail)) newErrors.refereeEmail = 'Valid Referee Email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post('http://localhost:3001/api/referrals', {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      });
      alert('Referral submitted successfully');
    } catch (error) {
      console.error('Error creating referral:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>Refer a Friend</Typography>
      <TextField
        label="Referrer Name"
        value={referrerName}
        onChange={(e) => setReferrerName(e.target.value)}
        fullWidth
        required
        error={Boolean(errors.referrerName)}
        helperText={errors.referrerName}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Referrer Email"
        type="email"
        value={referrerEmail}
        onChange={(e) => setReferrerEmail(e.target.value)}
        fullWidth
        required
        error={Boolean(errors.referrerEmail)}
        helperText={errors.referrerEmail}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Referee Name"
        value={refereeName}
        onChange={(e) => setRefereeName(e.target.value)}
        fullWidth
        required
        error={Boolean(errors.refereeName)}
        helperText={errors.refereeName}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Referee Email"
        type="email"
        value={refereeEmail}
        onChange={(e) => setRefereeEmail(e.target.value)}
        fullWidth
        required
        error={Boolean(errors.refereeEmail)}
        helperText={errors.refereeEmail}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>Submit Referral</Button>
    </Box>
  );
};

export default ReferralForm;
