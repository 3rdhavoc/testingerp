import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface SimpleContainerProps {
  children: React.ReactNode; // Define the children prop
}

export default function SimpleContainer({ children }: SimpleContainerProps) {
  return (
    <React.Fragment>
      <CssBaseline />
    
        <Box sx={{ height: '100vh', width: '100vw' }}>
          {children} {/* Render the children here */}
        </Box>
 
    </React.Fragment>
  );
}
