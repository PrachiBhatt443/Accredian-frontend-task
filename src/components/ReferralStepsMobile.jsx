import React from 'react';
import { Box, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RewardsIcon from '@mui/icons-material/EmojiEvents';
import ShareIcon from '@mui/icons-material/Share';

const steps = [
  {
    icon: <ShareIcon sx={{ fontSize: 30 }} />,
    title: 'Submit Referrals',
    description: 'Submit referrals easily via our website’s referral section.',
  },
  {
    icon: <RewardsIcon sx={{ fontSize: 30 }} />,
    title: 'Earn Rewards',
    description: 'Earn rewards once your referral joins an Accredian program.',
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 30 }} />,
    title: 'Receive Bonus',
    description: 'Both parties receive a bonus 30 days after program enrollment.',
  },
];

const ReferralStepsMobile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        textAlign: 'center',
        padding: 3,
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
        maxWidth: 400,
        margin: 'auto',
        mt: 4,
        '@keyframes colorChangeStep1': {
          '0%, 33%, 100%': { backgroundColor: '#f5f5f5', color: '#1976d2' },
          '11%': { backgroundColor: '#1976d2', color: '#ffffff' }
        },
        '@keyframes colorChangeStep2': {
          '0%, 11%, 44%, 100%': { backgroundColor: '#f5f5f5', color: '#1976d2' },
          '22%': { backgroundColor: '#1976d2', color: '#ffffff' }
        },
        '@keyframes colorChangeStep3': {
          '0%, 22%, 66%, 100%': { backgroundColor: '#f5f5f5', color: '#1976d2' },
          '33%': { backgroundColor: '#1976d2', color: '#ffffff' }
        }
      }}
    >
      {steps.map((step, index) => (
        <Box
          key={index}
          sx={{
            mb: 2,
            animation: `colorChangeStep${index + 1} 6s infinite`,
            padding: 2,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {React.cloneElement(step.icon, {
            sx: {
              ...step.icon.props.sx,
              animation: `colorChangeStep${index + 1} 6s infinite`
            }
          })}
          <Typography
            variant="h6"
            component="h3"
            sx={{ mt: 1, fontWeight: 'bold' }}
          >
            {step.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1 }}
          >
            {step.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ReferralStepsMobile;
