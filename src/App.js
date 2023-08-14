import './App.css';
import { useState } from 'react'; 
import {Task} from './Task';

function App() {
  //Declare a new state variable, which we'll call "todoList", and a function to update it 
  // and initialize it with an empty array = useSate([])
  const [todoList,setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

 // create a function to handle the change in the input field
  const handleChange =(event) => {
    setNewTask(event.target.value);
  };
  
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  //function to delete the task
  const deleteTask = (id) =>{
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;