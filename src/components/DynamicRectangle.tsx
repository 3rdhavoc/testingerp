import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DynamicRectangleProps {
  value: number; // The value determines the length (0 to 100 or more)
  maxValue?: number; // Optional: The maximum value for 100% length
  label?: string; // Optional: A label to display above or inside the rectangle
}

const DynamicRectangle: React.FC<DynamicRectangleProps> = ({
  value,
  maxValue = 100,
  label,
}) => {
  // Calculate the width percentage
  const widthPercentage = Math.min((value / maxValue) * 100, 100); // Cap at 100%

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Optional label */}
      {label && (
        <Typography sx={{ mb: 1, fontSize: 14, fontWeight: 'bold' }}>
          {label}: {value}/{maxValue}
        </Typography>
      )}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#e0e0e0', // Background color for the track
          height: 20, // Total height of the rectangle
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: `${widthPercentage}%`,
            height: '100%',
            backgroundColor: value > maxValue ? '#ff5722' : '#4caf50', // Change color if exceeds max
            transition: 'width 0.3s ease-in-out', // Smooth animation for width changes
          }}
        />
      </Box>
    </Box>
  );
};

export default DynamicRectangle;
