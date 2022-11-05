import React, { useState } from "react";
import SingleTaskPage from "./components/SingleTaskPage";
import TaskListPage from "./components/TaskListPage";
import MorePage from "./components/MorePage";
import ProgressPage from "./components/ProgressPage";
import NavBar from "./components/Navigation";
import Button from '@mui/material/Button';
import { Box, Container } from "@mui/system";
import Grid from '@mui/material/Grid';

function GetPage(page) {
	 switch(page){
		case "TaskList": return <TaskListPage x="lol" />;
		case "More": return <MorePage x="lol" />;
		case "Progress": return <ProgressPage x="lol" />;
		default:  <p>Stop hacking!</p>;
	 }
}

function App(){
  const [page, setPage]=useState("TaskList") //pges: "landing", "login", ...
  
	return <Container 
  style={{display: "flex",
  "flex-direction": "column",
  height: "100vh"
}}
  maxWidth='sm'>
    <Box flex={1}>
		{GetPage(page)}
    </Box>
		<NavBar setPage={setPage} initialPage={page} />
    </Container>
    ;
}
export default App;
