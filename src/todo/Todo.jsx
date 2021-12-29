import { useState } from "react";

const TodoList = () => {
  const [Tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTask(prevState => [...prevState, {id: Date.now(), text: newTask}]);
  }

  const inputTracker = (e) => {
    setNewTask(e.target.value);
  }

  const deleteTask = (id) => {
    setTask(prevState => prevState.filter(task => task.id !== id))
  }

  return (
    <div className="">
      <div className="form">
        <input onChange={inputTracker} type="text"/>
        <button onClick={addTask}>Do some magic</button>
      </div>
      <div className="tasks">
        {Tasks.map((task) => 
          <li key={task.id} onClick={() => deleteTask(task.id)}>{task.text}</li>
        )}
      </div>
    </div>
  )
}

export default TodoList;