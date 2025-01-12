'use client';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import {Typography } from '@mui/material';
import FullWidthTextField from './TextField';
import RowRadioButtonsGroup from './RadioGroup'; 
import BasicDatePicker from './Date';
import BasicSelect from './Nationality';
import StatusGroup from './Status';
import StatusG from './Status2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    height: '100vh'
  }),
}));

export default function ResponsiveGrid() {
  return (
   
      <Grid container spacing={1} sx={{height: '100vh'}} >
       
          <Grid size={2} sx={{height: '100%'}} >
            <Item sx={{height: '100%'}}></Item>
          </Grid>
          <Grid size={10} sx={{height: '100%'}}>
            <Item sx={{height: '100%'}}>
            <Grid container spacing={2}>
              <Grid size={8} >
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'start'}}>
                    <Typography sx={{fontWeight: 'bold',fontSize: 28}}>New Student</Typography>
                    <Box sx={{height: 80}}></Box>
                    <Typography sx={{fontSize: 20, fontWeight: 'bold'}}>Personal Information</Typography>
                    <Typography sx={{fontSize: 15}}>Enter the required information below 
                      to register. You can change it sanytime you 
                      want</Typography>
                      <Typography sx={{fontSize: 16, mt: 2.5}}>Email address</Typography>
                      <FullWidthTextField label='email address' size='small'   width='100%'/>
                      <Typography sx={{mt: 2}}>Full name</Typography>
                      <Box sx={{display:'flex', width: '100%'}}>
                        <FullWidthTextField label='surname' sx={{mr: 2}} size='small' width='40%' />
                        <FullWidthTextField label='othernames'size='small' width='60%'/>
                      </Box>
                      <Typography sx={{mt: 2.5}}>Address</Typography>
                      <Box sx={{display: 'flex', width: '100%'}}>
                        <FullWidthTextField size='small' sx={{mr: 2}} width='60%' label='Address'/>
                        <FullWidthTextField size='small' width='40%' label='Digital address'/>
                      </Box>
                      <Box sx={{display: 'flex',mt: 2.5, width: '100%'}}>
                        <Box sx={{display:'flex', alignItems: 'start', 
                           flexDirection: 'column',mr: 3}}>
                          <Typography>Date of Birth</Typography>
                          <BasicDatePicker /> 
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column',width: '100%' }}>
                          <Typography sx={{mb: -2}}>Nationality</Typography>
                          <BasicSelect/>
                     
                        </Box>
                 
                      </Box>
                      <StatusG/>
                </Box>
              </Grid>
                <Grid size={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}} >
                <Box  sx={{height: 120}}></Box>
                <Typography sx={{fontWeight: 'bold', fontSize: 20}}>Guardian Info</Typography>
                <Typography sx={{fontSize: 16, mt: 2.5}}>Parent/Guardian&apos;s full name</Typography>
                <FullWidthTextField label='Full name' size='small'/>
                <Typography sx={{fontSize: 16, mt: 2.5}}>Contact Info</Typography>
                <Box sx={{display: 'flex', }}>
                  <FullWidthTextField label='Phone number' size='small'/>

                </Box>
                <Typography sx={{fontSize: 16, mt: 2.5}}>Parent Occupation</Typography>
                <FullWidthTextField label='Enter an occupation' size='small'/>
                <StatusGroup/>

              </Grid>

            </Grid>
            </Item>
          </Grid>
    
    
      </Grid>

  );
}
