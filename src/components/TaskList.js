import React from "react";
import { TASKS } from "../data";


function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <TASKS key={index} task={task} />
      ))}
    </div>
  );
}


export default TaskList;
