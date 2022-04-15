import './App.css'
import { useState } from 'react';
import ToDoList from './ToDoList'
import example from '../data/todos'
import TodoForm from './TodoForm';
function App() {
  const [toDo,setTodo] = useState(example.example)
  const handleAdd = (i) =>{
    setTodo([i,...toDo])
    
  }
  return (
    <div className="App">
     <h1>Welcome to my To Dos List</h1> 
      <TodoForm  addNewTodo = {handleAdd}/>
      <ToDoList myList = {toDo}/>
    </div>
  );
}

export default App;
