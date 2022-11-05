import React, { useState } from "react";
import Button from '@mui/material/Button';

function LandingPage({moveToLogin}){
    return <>
    <p>landing page</p>
    <Button onClick={moveToLogin}>Start</Button>
  </>;
}
export default LandingPage;