import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import logo from "../Assets/Images/dlLogo-removebg-preview1.png";
import RecommendIcon from '@mui/icons-material/Recommend';
import GradeIcon from '@mui/icons-material/Grade';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

export default function Sidebar() {
  return (
    <Box
    sx={{
      width: 350,
      height: '96.5vh',
      padding: 2,
      paddingRight: 0,
    }}
  >
    <Box
      component="img"
      src={logo}
      alt="logo"
      sx={{ width: '100%', marginBottom: 2 }}
    />
    <Box sx={{height:"100%", backgroundColor:"black", color:"white"}}>
    <List>
      <ListItem button sx={{minWidth: 230}}>
      <ListItemIcon sx={{minWidth: 40}}><GradeIcon sx={{color:"white"}}/></ListItemIcon>
        <ListItemText primary="Top Rated" />
      </ListItem>
      <ListItem button sx={{minWidth: 230}}>
      <ListItemIcon sx={{minWidth: 40}}><WhatshotIcon sx={{color:"white"}}/></ListItemIcon>
        <ListItemText primary="Trending" />
      </ListItem>
      <ListItem button sx={{minWidth: 230}}>
      <ListItemIcon sx={{minWidth: 40}}><OpenInBrowserIcon sx={{color:"white"}}/></ListItemIcon>
        <ListItemText primary="Latest" />
      </ListItem>
      <ListItem button sx={{minWidth: 230}}>
      <ListItemIcon sx={{minWidth: 40}}><FeaturedPlayListIcon sx={{color:"white"}}/></ListItemIcon>
        <ListItemText primary="Featured" />
      </ListItem>
      <ListItem button sx={{minWidth: 230}}>
        <ListItemIcon sx={{minWidth: 40}}><RecommendIcon sx={{color:"white"}}/></ListItemIcon>
        <ListItemText primary="Recommended" />
      </ListItem>
    </List>
    </Box>
  </Box>
  );
}
