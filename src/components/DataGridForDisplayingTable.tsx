'use client';
import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import { useDebounce } from 'use-debounce';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import BasicCard from './Paymentpopup';
import CardOverlay from './CardOverlay';
// Custom data without columns property
const customData = {
  rows: [
    { id: 1, title: 'The Lion King', company: 'Disney', director: 'Jon Favreau', year: 2019, cinematicUniverse: 'N/A' },
    { id: 2, title: 'Avengers: Endgame', company: 'Marvel Studios', director: 'Anthony Russo', year: 2019, cinematicUniverse: 'Marvel' },
    { id: 3, title: 'Star Wars: The Force Awakens', company: 'Lucasfilm', director: 'J.J. Abrams', year: 2015, cinematicUniverse: 'Star Wars' },
    { id: 4, title: 'Frozen II', company: 'Disney', director: 'Chris Buck', year: 2019, cinematicUniverse: 'N/A' },
    { id: 5, title: 'Inception', company: 'Warner Bros.', director: 'Christopher Nolan', year: 2010, cinematicUniverse: 'N/A' },
    { id: 6, title: 'Jurassic World', company: 'Universal Pictures', director: 'Colin Trevorrow', year: 2015, cinematicUniverse: 'Jurassic Park' },
    { id: 7, title: 'The Dark Knight', company: 'Warner Bros.', director: 'Christopher Nolan', year: 2008, cinematicUniverse: 'DC' },
    { id: 8, title: 'The Avengers', company: 'Marvel Studios', director: 'Joss Whedon', year: 2012, cinematicUniverse: 'Marvel' },
    { id: 9, title: 'Guardians of the Galaxy', company: 'Marvel Studios', director: 'James Gunn', year: 2014, cinematicUniverse: 'Marvel' },
    { id: 10, title: 'Titanic', company: 'Paramount Pictures', director: 'James Cameron', year: 1997, cinematicUniverse: 'N/A' },
    { id: 11, title: 'Black Panther', company: 'Marvel Studios', director: 'Ryan Coogler', year: 2018, cinematicUniverse: 'Marvel' },
    { id: 12, title: 'Spider-Man: No Way Home', company: 'Sony Pictures', director: 'Jon Watts', year: 2021, cinematicUniverse: 'Marvel' },
    { id: 13, title: 'Frozen', company: 'Disney', director: 'Chris Buck', year: 2013, cinematicUniverse: 'N/A' },
    { id: 14, title: 'The Matrix', company: 'Warner Bros.', director: 'Lana Wachowski', year: 1999, cinematicUniverse: 'The Matrix' },
    { id: 15, title: 'Wonder Woman', company: 'Warner Bros.', director: 'Patty Jenkins', year: 2017, cinematicUniverse: 'DC' },
    { id: 16, title: 'Justice League', company: 'Warner Bros.', director: 'Zack Snyder', year: 2017, cinematicUniverse: 'DC' },
    { id: 17, title: 'Shazam!', company: 'Warner Bros.', director: 'David F. Sandberg', year: 2019, cinematicUniverse: 'DC' },
    { id: 18, title: 'Toy Story 4', company: 'Disney/Pixar', director: 'Josh Cooley', year: 2019, cinematicUniverse: 'Toy Story' },
    { id: 19, title: 'Coco', company: 'Disney/Pixar', director: 'Lee Unkrich', year: 2017, cinematicUniverse: 'N/A' },
    { id: 20, title: 'The Hobbit: An Unexpected Journey', company: 'Warner Bros.', director: 'Peter Jackson', year: 2012, cinematicUniverse: 'Middle-earth' },
    { id: 21, title: 'Doctor Strange', company: 'Marvel Studios', director: 'Scott Derrickson', year: 2016, cinematicUniverse: 'Marvel' },
    { id: 22, title: 'Ant-Man', company: 'Marvel Studios', director: 'Peyton Reed', year: 2015, cinematicUniverse: 'Marvel' },
    { id: 23, title: 'The Godfather', company: 'Paramount Pictures', director: 'Francis Ford Coppola', year: 1972, cinematicUniverse: 'N/A' },
    { id: 24, title: 'The Incredibles', company: 'Disney/Pixar', director: 'Brad Bird', year: 2004, cinematicUniverse: 'N/A' },
    { id: 25, title: 'The Lion King (2019)', company: 'Disney', director: 'Jon Favreau', year: 2019, cinematicUniverse: 'N/A' },
    { id: 26, title: 'Star Wars: The Last Jedi', company: 'Lucasfilm', director: 'Rian Johnson', year: 2017, cinematicUniverse: 'Star Wars' },
    { id: 27, title: 'Avengers: Age of Ultron', company: 'Marvel Studios', director: 'Joss Whedon', year: 2015, cinematicUniverse: 'Marvel' },
    { id: 28, title: 'Captain Marvel', company: 'Marvel Studios', director: 'Anna Boden', year: 2019, cinematicUniverse: 'Marvel' },
    { id: 29, title: 'Black Widow', company: 'Marvel Studios', director: 'Cate Shortland', year: 2021, cinematicUniverse: 'Marvel' },
    { id: 30, title: 'Aquaman', company: 'Warner Bros.', director: 'James Wan', year: 2018, cinematicUniverse: 'DC' },
    { id: 31, title: 'The Secret Life of Pets 2', company: 'Universal Pictures', director: 'Chris Renaud', year: 2019, cinematicUniverse: 'N/A' },
    { id: 32, title: 'Spider-Man: Far From Home', company: 'Sony Pictures', director: 'Jon Watts', year: 2019, cinematicUniverse: 'Marvel' },
    { id: 33, title: 'Iron Man 3', company: 'Marvel Studios', director: 'Shane Black', year: 2013, cinematicUniverse: 'Marvel' },
    { id: 34, title: 'Thor: Ragnarok', company: 'Marvel Studios', director: 'Taika Waititi', year: 2017, cinematicUniverse: 'Marvel' },
    { id: 35, title: 'Rogue One: A Star Wars Story', company: 'Lucasfilm', director: 'Gareth Edwards', year: 2016, cinematicUniverse: 'Star Wars' },
    { id: 36, title: 'Finding Dory', company: 'Disney/Pixar', director: 'Andrew Stanton', year: 2016, cinematicUniverse: 'Finding Nemo' },
    { id: 37, title: 'The Jungle Book', company: 'Disney', director: 'Jon Favreau', year: 2016, cinematicUniverse: 'N/A' },
    { id: 38, title: 'Zootopia', company: 'Disney', director: 'Byron Howard', year: 2016, cinematicUniverse: 'N/A' },
    { id: 39, title: 'Moana', company: 'Disney', director: 'John Musker', year: 2016, cinematicUniverse: 'N/A' },
    { id: 40, title: 'Aladdin (2019)', company: 'Disney', director: 'Guy Ritchie', year: 2019, cinematicUniverse: 'N/A' },
  ],
};
type Row = {
  id: number;
  title: string;
  company: string;
  director: string;
  year: number;
  cinematicUniverse: string;
};

// Custom columns
export default function QuickFilteringInitialize() {
  const [quickFilterValue, setQuickFilterValue] = useState('');
  const [filteredRows, setFilteredRows] = useState(customData.rows);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [debouncedFilterValue] = useDebounce(quickFilterValue, 500);

  useEffect(() => {
    const filtered = customData.rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(debouncedFilterValue.toLowerCase())
      )
    );
    setFilteredRows(filtered);
  }, [debouncedFilterValue]);

  // Move handleRowAction here
  const handleRowAction = (row: Row) => {
    setSelectedRow(row); // Save the row details for the overlay
    setOverlayOpen(true);
  };
  
  const handleOverlayClose = () => {
    setOverlayOpen(false);
    setSelectedRow(null); // Reset the selected row
  };

  // Custom columns (defined after handleRowAction)
  const customColumns: GridColDef[] = [
    { field: 'title', headerName: 'Title', headerAlign: 'center', width: 200 },
    { field: 'company', headerName: 'Company', headerAlign: 'center', width: 200 },
    { field: 'director', headerName: 'Director', headerAlign: 'center', width: 200 },
    { field: 'year', headerName: 'Year', headerAlign: 'center', width: 150 },
    { field: 'cinematicUniverse', headerName: 'Cinematic Universe', headerAlign: 'center', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      align: 'center',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<AddIcon />}
          onClick={() => handleRowAction(params.row)} // Reference handleRowAction
        >
          Open
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: '90%', width: '100%', pt: 0 }}>
    {/* Search Bar */}
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search..."
        value={quickFilterValue}
        onChange={(e) => setQuickFilterValue(e.target.value)}
      />
    </Box>
    <Box sx={{ height: '90%', width: '100%', pt: 0 }}>
      <DataGrid
        rows={filteredRows}
        columns={customColumns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        sx={{ border: 'none' }}
        rowHeight={60}
        hideFooter
      />

      {overlayOpen && (
        <CardOverlay onClose={handleOverlayClose}>
          <BasicCard row={selectedRow} />
        </CardOverlay>
      )}
    </Box>
 </Box> );
}