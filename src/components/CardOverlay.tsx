import React from "react";
import Box from "@mui/material/Box";

interface CardOverlayProps {
  onClose: () => void;
  children?: React.ReactNode;
}

const CardOverlay: React.FC<CardOverlayProps> = ({ onClose, children }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <Box onClick={(e) => e.stopPropagation()} sx={{ background: "white", padding: 4, borderRadius: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default CardOverlay;
