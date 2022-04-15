import './App.css'
import ToDoList from './ToDoList'
import example from '../data/todos'

function App() {
  
  return (
    <div className="App">
     <h1>Welcome to my To Dos List</h1> 
      <ToDoList myList = {example.example}/>
    </div>
  );
}

export default App;
