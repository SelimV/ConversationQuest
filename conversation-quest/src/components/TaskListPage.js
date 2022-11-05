import { Container } from "@mui/system";
import React, { useState } from "react";
import TaskList from "./TaskList";

function TaskListPage() {
  const [tasks, setTasks] = useState([{
    name: "test task",
    description: "test the task list",
    completed: false
  }
  ])

  return <>
    <div>All/Active selector</div>
    <div>Filter paneli</div>
    <Container>
      <TaskList tasks={tasks} />
    </Container>
  </>;
}
export default TaskListPage;
