import { useState } from 'react'
export default function TodoForm({addNewTodo}) {
  const [text,setText] = useState('')
  const handleChange = (event)=>{
    setText(event.target.value)
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    let newTodo = {
      id : Math.random() * 2,
      title : text,
      isDone : false
    }
    addNewTodo(newTodo)
    setText('')
  }
  return (
    <div>
     <form onSubmit = {handleSubmit}>
       <input onChange = {handleChange} value = {text} type = "text" placeholder='enter to do' />
        <button type='submit'>Create</button> 
      </form>
    </div>
  )
}
