import React, { useState } from "react";
import Button from '@mui/material/Button';

function SingleTaskPage({moveToLogin, x}){
    return <>
    <p>single task page</p>
    <Button onClick={moveToLogin}>Start</Button>
  </>;
}
export default SingleTaskPage;
