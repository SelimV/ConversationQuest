import React, { useState } from "react";
import SingleTaskPage from "./components/SingleTaskPage";
import TaskListPage from "./components/TaskListPage";
import MorePage from "./components/MorePage";
import ProgressPage from "./components/ProgressPage";
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
		<div>Tähän tulee navbar
			<Button onClick={() => setPage("TaskList")}>tasklist</Button>
			<Button onClick={() => setPage("Progress")}>progress</Button>
			<Button onClick={() => setPage("More")}>more</Button>
		</div>
	</>;
}
export default App;
