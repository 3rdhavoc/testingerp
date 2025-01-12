'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/system';

// Define the interface for the component props
interface FullWidthTextFieldProps {
  label: string;
   size?: 'small' | 'medium';
  width?: string | number; 
 // Optional width for the Box container
  sx?: SxProps<Theme>; // Optional custom styles for the Box
  textFieldProps?: React.ComponentProps<typeof TextField>; // Props for the TextField
}

export default function FullWidthTextField({
  label,
  width = 400,
  sx = {},
  size = 'medium',
  textFieldProps = {},
}: FullWidthTextFieldProps) {
  return (
    <Box sx={{ width, maxWidth: '100%',  ...sx }}>
      <TextField fullWidth label={label} size={size} {...textFieldProps} />
    </Box>
  );
}
