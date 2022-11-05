import React, { useState } from "react";
import SingleTaskPage from "./components/SingleTaskPage";
import TaskListPage from "./components/TaskListPage";
import MorePage from "./components/MorePage";
import ProgressPage from "./components/ProgressPage";
import NavBar from "./components/Navigation";
import Button from '@mui/material/Button';

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
  
	return <>
		{GetPage(page)}
		<NavBar setPage={setPage} initialPage={page} />;
	</>;
}
export default App;
