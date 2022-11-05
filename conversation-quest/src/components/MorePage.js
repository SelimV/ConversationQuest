import React, { useState } from "react";
import Button from '@mui/material/Button';

function MorePage({moveToLogin, x}){
    return <>
    <p>landing page</p>
    <p>landing page {x}</p>
    <Button onClick={moveToLogin}>Start</Button>
  </>;
}
export default MorePage;