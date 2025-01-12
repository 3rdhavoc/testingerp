import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

interface BasicCardProps {
  row: {
    title: string;
    company: string;
    director: string;
    year: number;
    cinematicUniverse: string;
  } | null; // Allow row to be null
}

export default function BasicCard({ row }: BasicCardProps) {
  if (!row) {
    // Handle the null case (optional: render a message or fallback UI)
    return (
      <Box sx={{ height: 500, width: 706, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>No data available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height: 500, width: 706, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ minWidth: 275, height: '100%', width: '100%', border: 'none' }}>
        <CardActions>
          <Button size="small" variant="outlined">
            Payment
          </Button>
          <Button size="small" variant="outlined">
            Edit Information
          </Button>
        </CardActions>
        <CardContent>
          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <Avatar src="/broken-image.jpg" sx={{ height: 50, width: 50 }} />
            <Box sx={{ ml: 1 }}>
              <Typography sx={{ mb: -0.4 }}>{row.title}</Typography>
              <Typography sx={{ fontSize: 12 }}>{row.cinematicUniverse}</Typography>
            </Box>
          </Box>
          <Grid container spacing={2} sx={{ width: '100%', mt: 3 }}>
            <Grid item xs={6}>
              <Typography>Director</Typography>
              <Typography sx={{ fontSize: 13 }}>{row.director}</Typography>

              <Typography sx={{ mt: 2 }}>Year</Typography>
              <Typography sx={{ fontSize: 13, color: '#555753' }}>{row.year}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Company</Typography>
              <Typography sx={{ fontSize: 13 }}>{row.company}</Typography>

              <Typography sx={{ mt: 2 }}>Cinematic Universe</Typography>
              <Typography sx={{ fontSize: 13 }}>{row.cinematicUniverse}</Typography>
            </Grid>
          </Grid>
          <Typography sx={{ mt: 3 }}>Amount</Typography>
          <TextField id="outlined-basic" size="small" sx={{ width: '100%' }} label="Outlined" variant="outlined" />
          <CardActions sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', width: '100%', ml: -1 }}>
              <Button variant="outlined" sx={{ width: '60%', mr: 1 }}>
                Cancel
              </Button>
              <Button variant="outlined" sx={{ width: '40%' }}>
                Pay
              </Button>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}