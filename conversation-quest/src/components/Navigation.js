import React, { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

function NavBar({moveToLogin, x}){
    return <>
    <BottomNavigation
      showLabels
      value={x}
      onChange={(event, newValue) => {
        // setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} />
      <BottomNavigationAction label="Nearby" icon={<FavoriteIcon />} />
    </BottomNavigation>   
    <Button onClick={moveToLogin}>Start</Button>
  </>;
}
export default NavBar;