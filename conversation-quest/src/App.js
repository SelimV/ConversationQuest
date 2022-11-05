import React, { useState } from "react";
import SingleTaskPage from "./components/SingleTaskPage";
import TaskListPage from "./components/TaskListPage";
import MorePage from "./components/MorePage";
import ProgressPage from "./components/ProgressPage";
import NavBar from "./components/Navigation";

function App(){
  const [page, setPage]=useState("TaskList") //pges: "landing", "login", ...
  
  switch(page){
    case "TaskList": return <NavBar moveToLogin={()=>setPage("login")} x="lol" />;
    case "More": return <MorePage moveToLogin={()=>setPage("login")} x="lol" />;
    case "Progress": return <ProgressPage moveToLogin={()=>setPage("login")} x="lol" />;
    default:  <p>Stop hacking!</p>;
  }


}
export default App;
