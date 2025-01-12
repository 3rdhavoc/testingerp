'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { SxProps, Theme } from '@mui/system';

interface OutlinedCardProps {
  sxStyles?: SxProps<Theme>; // Allow passing custom styles
  children?: React.ReactNode; // Render children inside the card
}

const OutlinedCard: React.FC<OutlinedCardProps> = ({ sxStyles, children }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{
          bgcolor: '#EEF0EE', // default background color
          boxShadow: 'none',
          borderRadius: 0,
          ...sxStyles, // Apply custom styles passed via sxStyles
        }}
      >
        <CardContent>{children}</CardContent>
        <CardActions>
          {/* Additional action buttons or elements can go here */}
        </CardActions>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
