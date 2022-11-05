import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import Tasks from "../json/tasks.json";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function TaskListPage() {
  const [activeTasks, setActiveTasks]=useState(JSON.parse(localStorage.getItem("activeTasks") ?? "[]")) //pges: "landing", "login", ...
	useEffect(() => {
		localStorage.setItem("activeTasks", JSON.stringify(activeTasks))
	});


  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Active" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
		  <TaskList tasks={Tasks} activeTasks={activeTasks} setActiveTasks={setActiveTasks} />
		</TabPanel>
        <TabPanel value="2">
			<TaskList tasks={Tasks.filter(task=>activeTasks.includes(task.id))} activeTasks={activeTasks} setActiveTasks={setActiveTasks} />
		</TabPanel>
      </TabContext>
    </Box>
  );
}
export default TaskListPage;
