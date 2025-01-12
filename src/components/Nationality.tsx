'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <FormControl 
        fullWidth 
        size="small" 
        sx={{
          '& .MuiInputLabel-root': {
            backgroundColor: 'white', // Adds white background to the label
            padding: '0 4px', // Adds padding around the label
          },
          '& .MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.75)', // Adjusts the position of the shrunken label
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">Select a country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value={'Ghana'}>Ghana</MenuItem>
          <MenuItem value={'Nigeria'}>Nigeria</MenuItem>
          <MenuItem value={'Liberia'}>Liberia</MenuItem>
          <MenuItem value={'Cote d\'Ivoire'}>Cote d&apos;Ivoire</MenuItem>
          <MenuItem value={'Togo'}>Togo</MenuItem>
          <MenuItem value={'Benin'}>Benin</MenuItem>
          <MenuItem value={'Senegal'}>Senegal</MenuItem>
          <MenuItem value={'Guinea'}>Guinea</MenuItem>
          <MenuItem value={'Burkina Faso'}>Burkina Faso</MenuItem>
          <MenuItem value={'Cape Verde'}>Cape Verde</MenuItem>
          <MenuItem value={'Sierra Leone'}>Sierra Leone</MenuItem>
          <MenuItem value={'Niger'}>Niger</MenuItem>
          <MenuItem value={'Mali'}>Mali</MenuItem>
          <MenuItem value={'Gambia'}>Gambia</MenuItem>
          <MenuItem value={'Guinea Bissau'}>Guinea Bissau</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
