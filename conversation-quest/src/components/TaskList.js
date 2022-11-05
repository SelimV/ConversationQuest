import { List } from "@mui/material";
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";



function TaskList({tasks}) {
    
    return <List>
        {tasks.map(task=><TaskListItem task={task}/>)}
    </List>;
}
export default TaskList;