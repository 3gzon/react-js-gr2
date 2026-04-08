import React, { useState } from "react";

function InputState() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const addTask = () => {
        if (task.trim() === "") {
            return
        }
        setTasks(tasks.concat(task));
        setTask("");
    }
    return (
        <>
            <input
                onChange={(event)=>{setTask(event.target.value)}}
                type="text"
                value={task}
            />

            <button onClick={addTask}>Add new task</button>

            <ul>
                {
                    tasks.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </>
  )
}

export default InputState;
