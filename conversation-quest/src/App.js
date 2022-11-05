import React, { useState, useEffect } from "react";
import SingleTaskPage from "./components/SingleTaskPage";
import TaskListPage from "./components/TaskListPage";
import MorePage from "./components/MorePage";
import ProgressPage from "./components/ProgressPage";
import NavBar from "./components/Navigation";
import Button from '@mui/material/Button';
import { Box, Container } from "@mui/system";
import Grid from '@mui/material/Grid';




function App(){
  const [page, setPage]=useState("TaskList") //pges: "landing", "login", ...


	// Task states
	// activeTasks: [{date, id}]
	const [activeTasks, setActiveTasks]=useState(JSON.parse(localStorage.getItem("activeTasks") ?? "[]"))

	const setTaskActive = (active, task) => {
		if(active) {
			if(!activeTasks.some(el => el.id == task.id))
				setActiveTasks([...activeTasks,{id: task.id, date: Date.now()}])
		} else {
			setActiveTasks(activeTasks.filter(el => el.id != task.id))
		}
	};

	// Task states
	// taskHistory: [{task, date, result, score}]
	const [taskHistory, setTaskHistory]=useState(JSON.parse(localStorage.getItem("taskHistory") ?? "[]"))

	const addTaskHistory = (task, result, score) => {
		setTaskHistory([...taskHistory, {task: task, date: Date.now(), result: result, score: score}]);
	};

	useEffect(() => {
		localStorage.setItem("taskHistory", JSON.stringify(taskHistory))
		localStorage.setItem("activeTasks", JSON.stringify(activeTasks))
	});
  
	const GetPage = (page) => {
		 switch(page){
			case "TaskList": return <TaskListPage activeTasks={activeTasks} addTaskHistory={addTaskHistory} setActive={setTaskActive}/>;
			case "More": return <MorePage />;
			case "Progress": return <ProgressPage taskHistory={taskHistory} />;
			default:  <p>Stop hacking!</p>;
		 }
	}
	return <Container 
  style={{display: "flex",
  "flex-direction": "column",
  height: "100%"
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
