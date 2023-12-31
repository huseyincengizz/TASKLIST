import './App.css'
import TaskForm from './TaskForm'
import { useState } from 'react'
import TaskList from './TaskList'

export default function App(){
  const [tasks, setTasks] = useState([])

  const createTask = (title, textArea) =>{
    const taskLists = [
      {
        id: Math.round(Math.random()*9999),
        title,
        textArea
      },...tasks
    ]
    setTasks(taskLists)
    console.log(taskLists)
  }
  const deleteTaskId = (id) => {
    const deletedId = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(deletedId)
  };
  const editTaskId = (id, newTitle, newTextArea) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        return{
          id,
          title: newTitle,
          textArea: newTextArea
        }
      }
      return task;
    })
    setTasks(updateTask)
  };
  return(
    <div className="app">
      <TaskForm onCreate={createTask} />
      <h3>TASKS</h3>
      <TaskList tasks={tasks} deleting={deleteTaskId} onUpdate={editTaskId}/>
    </div>
  )
}
