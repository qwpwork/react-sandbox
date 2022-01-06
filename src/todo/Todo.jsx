import { useState } from "react";
import './Todo.scss'
const TodoList = () => {
  const [Tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTask(prevState => [...prevState, {id: Date.now(), text: newTask}]);
    setNewTask('');
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
        <input className="form__input" onChange={inputTracker} value={newTask} type="text"/>
        <button className="form__btn" onClick={addTask}>Do some magic</button>
      </div>
      <div className="tasks">
        {Tasks.map((task) => 
          <li className="tasks__task" key={task.id} onClick={() => deleteTask(task.id)}>{task.text}</li>
        )}
      </div>
    </div>
  )
}

export default TodoList;