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
    <List>
      <ListItem button>
      <ListItemIcon><GradeIcon color="action"/></ListItemIcon>
        <ListItemText primary="Top Rated" />
      </ListItem>
      <ListItem button>
      <ListItemIcon><WhatshotIcon /></ListItemIcon>
        <ListItemText primary="Trending" />
      </ListItem>
      <ListItem button>
      <ListItemIcon><OpenInBrowserIcon /></ListItemIcon>
        <ListItemText primary="Latest" />
      </ListItem>
      <ListItem button>
      <ListItemIcon><FeaturedPlayListIcon /></ListItemIcon>
        <ListItemText primary="Featured" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><RecommendIcon /></ListItemIcon>
        <ListItemText primary="Recommended" />
      </ListItem>
    </List>
  </Box>
  );
}
