'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import QuickFilteringInitialize from './DataGridForDisplayingTable';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
  height: '100%', // Ensure items take up full height
  display: 'flex', // Center content vertically
  alignItems: 'center',
  justifyContent: 'center',
}));

interface AutoGridProps {
  drawerOpen: boolean;
}

export default function AutoGrid({ drawerOpen }: AutoGridProps) {
  // Adjust grid width for the first pane based on the drawer state
  const gridWidth = drawerOpen ? 1 : 2; // Set width based on drawer state

  // List of navigation items with icons and names
  const navigationItems = [
    { icon: <HomeIcon />, name: 'Home' },
    { icon: <SettingsIcon />, name: 'Settings' },
    { icon: <InfoIcon />, name: 'About' },
    { icon: <ContactMailIcon />, name: 'Contact' },
  ];

  return (
    <Grid2 container spacing={2} sx={{ height: '100%', width: '100%' }}>
      {/* Navigation Pane */}
      <Grid2 size={gridWidth} sx={{ transition: 'width 0.3s ease-in-out' }}>
        <Item>
          <List sx={{ width: '100%' }}>
            {navigationItems.map((item, index) => (
              <ListItem key={index} sx={{ justifyContent: 'center' }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {!drawerOpen && <ListItemText primary={item.name} />}
              </ListItem>
            ))}
          </List>
        </Item>
      </Grid2>

      {/* Main Content Pane */}
      <Grid2 size={10} sx={{ height: '100%' }}>
      
        <Box sx={{display: 'flex', mt: 1, ml: 3}}><svg  xmlns="http://www.w3.org/2000/svg" 
        width="2.2em" height="2.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg><Typography
          sx={{
            fontSize: 22,
            mt: 0.6,
            ml: 0,
            fontWeight: 'medium',
          }}
        >
          Student Table
        </Typography></Box>
        <QuickFilteringInitialize />
      </Grid2>
    </Grid2>
  );
}
