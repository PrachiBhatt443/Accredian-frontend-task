import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SchoolIcon from '@mui/icons-material/School';

const Benefits = () => {
  const programs = [
    'ALL PROGRAMS',
    'Product Management',
    'Strategy & Leadership',
    'Business Management',
    'Fintech',
    'Senior Management',
    'Data Science',
    'Digital Transformation',
    'Business Analytics',
  ];

  const referralBenefits = [
    {
      program: 'Professional Certificate Program in Product Management',
      category: 'Product Management',
      referrer: '₹ 7,000',
      referee: '₹ 9,000',
    },
    {
      program: 'PG Certificate Program in Strategic Product Management',
      category: 'Strategy & Leadership',
      referrer: '₹ 9,000',
      referee: '₹ 11,000',
    },
    {
      program: 'Executive Program in Data Driven Product Management',
      category: 'Business Management',
      referrer: '₹ 10,000',
      referee: '₹ 10,000',
    },
    {
      program: 'Executive Program in Product Management and Digital Transformation',
      category: 'Fintech',
      referrer: '₹ 10,000',
      referee: '₹ 10,000',
    },
    {
      program: 'Executive Program in Product Management',
      category: 'Senior Management',
      referrer: '₹ 10,000',
      referee: '₹ 10,000',
    },
    {
      program: 'Advanced Certification in Product Management',
      category: 'Data Science',
      referrer: '₹ 10,000',
      referee: '₹ 10,000',
    },
    {
      program: 'Executive Program in Product Management and Project Management',
      category: 'Business Analytics',
      referrer: '₹ 10,000',
      referee: '₹ 10,000',
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState('ALL PROGRAMS');

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const filteredBenefits = selectedProgram === 'ALL PROGRAMS'
    ? referralBenefits
    : referralBenefits.filter(benefit => benefit.category === selectedProgram);

  return (
    <Box sx={{ 
        // backgroundColor: 'rgba(235, 243, 255, 0.35)',
        
        py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          What Are The Referral Benefits?
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          <Grid item xs={11} md={3}>
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                // p: 3,
                borderRadius: '0px 0px 14px 14px',
                boxShadow: '0px 1px 24.4px 1px rgba(0, 0, 0, 0.16)',
                width: '270px',
                // height: '450px',
                opacity: '1',
              }}
            >
              <List>
                {programs.map((program, index) => (
                  <React.Fragment key={index}>
                    <ListItem button onClick={() => handleProgramClick(program)}>
                      <ListItemText primary={program} />
                      <ArrowForwardIosIcon fontSize="small" />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid item 
          xs={12} md={9}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(235, 243, 255, 0.35)',
                borderRadius: '14px',
                boxShadow: '0px 4px 29.3px 0px rgba(60, 60, 60, 0.15)',
                overflow: 'hidden',
              }}
            >
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        // align="left"
                        sx={{
                          borderRight: '1px solid rgba(224, 224, 224, 1)',
                          backgroundColor: 'rgba(26, 115, 232, 0.35)',
                          width: '45%',
                        }}
                      >
                        Program
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: '1px solid rgba(224, 224, 224, 1)',
                          backgroundColor: 'rgba(26, 115, 232, 0.35)',
                          width: '33%',
                        }}
                      >
                        Referrer Bonus
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          backgroundColor: 'rgba(26, 115, 232, 0.35)',
                          width: '33%',
                        }}
                      >
                        Referee Bonus
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{
                      backgroundColor: 'rgba(235, 243, 255, 0.35)',
                    }}
                  >
                    {filteredBenefits.map((benefit, index) => (
                      <TableRow key={index}>
                        <TableCell
                            sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            display: 'flex',
                            alignItems: 'center'
                            }}
                        >
                            <SchoolIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body2">{benefit.program}</Typography>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}
                        >
                          {benefit.referrer}
                        </TableCell>
                        <TableCell align="center">{benefit.referee}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
