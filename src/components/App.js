import React from "react";
import Overview from "./Overview";

class App extends React.Component {
  constructor(){
    super()
    this.state = {task:"",
                  tasks:["Hola buen día"]}
  }

  render(){
    const { task, tasks } = this.state;
    return (
      <div>
        <div className="container">
          <input id="taskText" placeholder="New task"></input>
          <button onClick={this.addTask}>Add task</button>
        </div>
        <Overview tasks={tasks}/>
      </div>
    );
  }
  addTask = (e) => {
    let text = document.querySelector("#taskText")
    this.setState({
      tasks: this.state.tasks.concat(text.value),
    })
  }

}

export default App;
