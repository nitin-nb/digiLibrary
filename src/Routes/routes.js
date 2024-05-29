import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Sidebar from "../Components/sideBar";
import { Box } from "@mui/material";

export default function AllRoutes() {
  return (
    <Box sx={{ display: 'flex', }}>
      <Sidebar />
      <Box sx={{padding: 2 }}>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}
