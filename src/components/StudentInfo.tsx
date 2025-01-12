import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid2'; // Import Grid2

export default function CardInfo() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Grid2 container spacing={2}>
            {/* First Grid Item */}
            <Grid2 size={6}>
              <Typography variant="h6">Personal Info</Typography>
              <Typography>Name</Typography>
              <Typography>Rolandho Kelvin David</Typography>
              <Typography>Gender</Typography>
              <Typography>Male</Typography>
              <Typography>Age</Typography>
              <Typography>15</Typography>
            </Grid2>

            {/* Second Grid Item */}
            <Grid2 size={6}>
              <Typography variant="h6">Contact Info</Typography>
              <Typography>Phone</Typography>
              <Typography>+123 456 7890</Typography>
              <Typography>Email</Typography>
              <Typography>example@example.com</Typography>
              <Typography>Address</Typography>
              <Typography>123 Street, City</Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
}
