'use client';
import * as React from 'react';
import PersistentDrawerRight from '../../components/Drawer';
import AutoGrid from '../../components/GridContainerForDataGrid';
import SimpleContainer from '../../components/container';
import Typography from '@mui/material/Typography';
import OutlinedCard from '@/components/OutlineCard';
import BasicGauges from '@/components/Gauge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import Material-UI Button
import { SxProps, Theme } from '@mui/system';
import CardInfo from '@/components/StudentInfo';

export default function MainPage() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Handle drawer toggle
  const toggleDrawerAction = () => setDrawerOpen((prev) => !prev);

  const cardOneStyles: SxProps<Theme> = { bgcolor: 'lightblue', padding: 2 };
  const cardTwoStyles: SxProps<Theme> = { bgcolor: 'white' };
  const cardThreeStyles: SxProps<Theme> = { bgcolor: 'white', display: 'flex', width: '100%' };

  return (
    <SimpleContainer>
      <PersistentDrawerRight
        drawerOpen={drawerOpen}
        toggleDrawerAction={toggleDrawerAction}
        drawerChildren={
          <div>
            <OutlinedCard>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography sx={{ ml: 2, mt: -2, pt: 1, fontSize: 13 }}>Name</Typography>
                  <Typography sx={{ ml: 2, fontSize: 15, mt: -0.6, fontWeight: 'bold' }}>
                    Rolandho Kelvin David
                  </Typography>
                  <Typography sx={{ ml: 2, mt: -0.5, fontSize: 13 }}>Class</Typography>
                  <Typography sx={{ ml: 2, fontSize: 15, mt: -0.6, mb: -3.8, fontWeight: 'bold' }}>
                    JHS 1
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert('Plus button clicked!')}
                >
                  +
                </Button>
              </Box>
            </OutlinedCard>
            <OutlinedCard sxStyles={cardTwoStyles}>
              <BasicGauges />
            </OutlinedCard>
            <OutlinedCard sxStyles={cardThreeStyles}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontSize: 12, width: 'auto' }}>
                  Avg class scores(%)
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => alert('Another button clicked!')}
                >
                  +
                </Button>
              </Box>
              <CardInfo/>
            </OutlinedCard>
          </div>
        }
      >
        <AutoGrid drawerOpen={drawerOpen} />
      </PersistentDrawerRight>
    </SimpleContainer>
  );
}
