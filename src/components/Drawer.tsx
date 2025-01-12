'use client';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CardInfo from './StudentInfo';

const drawerWidth = 360;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  height: '100%',
  width: '100%',
 
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: open ? 0 : 0, // Ensure no negative margins
  overflow: 'hidden', // Prevent unintended overflow
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
  marginRight: open ? drawerWidth : 0,
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'start',
 width: '0%',
  justifyContent: 'flex-start',
}));

interface PersistentDrawerRightProps {
  children: React.ReactNode;
  drawerChildren: React.ReactNode;
  drawerOpen: boolean;
  toggleDrawerAction: () => void;
}

export default function PersistentDrawerRight({
  children,
  drawerChildren,
  drawerOpen,
  toggleDrawerAction,
}: PersistentDrawerRightProps) {
  const theme = useTheme();

  return (
    <Box sx={{ height: '100%', width: '100%',  }}>
      <Box sx={{border:1,borderColor: 'rgba(0, 0, 0, 0.3)', height: '5%'}}></Box>
      <CssBaseline />
      {!drawerOpen && (
        <IconButton
          aria-label="toggle drawer"
          onClick={toggleDrawerAction}
          sx={{
            mt: 2,
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
            boxShadow: 'none',
            zIndex: 1301,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
     
      <Main open={drawerOpen}>{children}</Main>
      <Drawer
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerOpen ? drawerWidth : 0, // Adjust width when closed
            boxSizing: 'border-box',
            overflow: 'auto',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
        variant="persistent"
        anchor="right"
        open={drawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawerAction}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
      
        </DrawerHeader>
        {drawerChildren}
      </Drawer>
    </Box>
  );
}
