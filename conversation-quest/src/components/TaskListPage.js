import React, { useState } from "react";
import Button from '@mui/material/Button';

function TaskListPage({moveToLogin, x}){
    return <>
    <p>Task list here</p>
    <p>landing page {x}</p>
    <Button onClick={moveToLogin}>Start</Button>
  </>;
}
export default TaskListPage;