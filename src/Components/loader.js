import React from "react";
import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box sx={{ display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor: "rgba(0, 0, 0, 0.452)", zIndex: 9999, height:"96.5vh", width:"80vw" }}>
      <CircularProgress sx={{color:"white"}} />
      {/* <p style={{ fontSize: "20px", color: "#fff" }}>Loading...</p> */}
    </Box>
  );
}
