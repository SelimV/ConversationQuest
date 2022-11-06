import React, { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InfoIcon from '@mui/icons-material/Info';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from "@mui/material/Button";

function NavBar({setPage, initialPage}){
    return <>
    <Paper 
        sx={{
          position: 'fixed',
          bottom: 0, 
          left: 0, 
          right: 0
        }} elevation={3}>    
      <BottomNavigation
        showLabels
        value={initialPage}
        onChange={(event, newValue) => {
        setPage(newValue)
        }}
      >
        <BottomNavigationAction value="TaskList" label="tasklist" icon={<ListAltIcon />} />
        <BottomNavigationAction value="Progress" label="progress" icon={<LeaderboardIcon/>} />
        <BottomNavigationAction value="More" label="more" icon={<MoreHorizIcon />} />
      </BottomNavigation> 
    </Paper>
  
  </>;
}
export default NavBar;
