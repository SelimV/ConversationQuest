import { List } from "@mui/material";
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";

function TaskList({tasks, activeTasks, setActive, addTaskHistory}) {

    return <List>
		{tasks.map(task=><TaskListItem task={task} addTaskHistory={addTaskHistory} active={activeTasks.some(el => el.id == task.id)} setActive={setActive}/>)}
    </List>;
}
export default TaskList;
