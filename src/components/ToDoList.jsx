import React from 'react'
import ToDoListItem from './ToDoListItem'
export default function ToDoList({myList}) {
  return (
    <div>
      <ul>
      {myList.map (item => 
         <ToDoListItem
         key = {item.id}
        title = {item.title}
        status = {item.isDone}
      />
        
        )}
       
      </ul>
      
    </div>
  )
}
