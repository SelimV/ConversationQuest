import React, { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

function NavBar({setPage, initialPage}){
    return <>
    <BottomNavigation
      showLabels
      value={initialPage}
      onChange={(event, newValue) => {
		  setPage(newValue)
      }}
    >
      <BottomNavigationAction value="TaskList" label="tasklist" icon={<FavoriteIcon />} />
      <BottomNavigationAction value="Progress" label="progress" icon={<FavoriteIcon/>} />
      <BottomNavigationAction value="More" label="more" icon={<FavoriteIcon />} />
    </BottomNavigation>   
  </>;
}
export default NavBar;
