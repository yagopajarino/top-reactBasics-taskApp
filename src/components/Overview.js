import React from "react"

const Overview = (props) => {
    const {tasks} = props
    return (
        <div>
            <h2>Task list</h2>
            <ul>
            {tasks.map((task) => <li key={tasks.indexOf(task)}>{task}</li>)}
            </ul>
        </div>
    );
}

export default Overview