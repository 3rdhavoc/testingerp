'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import SimpleLineCHart from './Gridgraph';
import BarsDataset from './BarGaph';
import BasicPie from './Pieover';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(202, 202, 202,0.13)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '100vh',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function DashGrid() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <Grid container spacing={2} >
        <Grid size={2} >
         <Item>
          <Grid>    
          </Grid>
         </Item>
        </Grid>
        <Grid size={10} >
          <Item >
            <Grid container spacing={1} sx={{border: 0, height: '50%', bgcolor: 'white' }}>
            <Grid size={4} sx={{border: 1, height: '100%', bgcolor: 'white'}}></Grid>
            <Grid size={8} sx={{border: 1, borderColor: 'red', height: '100%', bgcolor: 'white'}}><SimpleLineCHart/></Grid>
            </Grid>
            <Grid container spacing={1} sx={{border: 1, height: '50%', mt: 1, bgcolor: 'white'}}>
              <Grid size={7} sx={{border: 1, height: '100%', bgcolor: 'white'}}><BarsDataset/></Grid>
              <Grid size={5} sx={{border:1, height: '100%', bgcolor: 'white'}}><BasicPie/></Grid>
              
            </Grid>
          </Item>
      </Grid>
      </Grid>
    </Box>
  );
}
