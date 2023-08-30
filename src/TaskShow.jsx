import { useState } from "react";
import TaskCreate from "./TaskCreate";

export default function TaskShow({task, deleting, onUpdate}) {
    const [showEdit, setShowEdit] = useState(false)

    const handelete = () => {
         deleting(task.id)
    }

    const handlEdit = () => {
        setShowEdit(true) 
    }

    const handleSubmit = (id, newTitle, newTextArea) =>{
        setShowEdit(false);
        onUpdate(id, newTitle, newTextArea);
    }

    return (
        <div className="taskShow">
        {
            showEdit ? (
            <TaskCreate task={task} updateTaskForm={true} onUpdate={handleSubmit}/>
            ):(
            <div>
            <h2>Heading</h2>
            <p>{task.title}</p>
            <h2>Description</h2>
            <p>{task.textArea}</p>
            <div>
                <button className="updateButton" onClick={handlEdit}>EDIT</button>
                <button className="deleteButton" onClick={handelete}>DELETE</button>
            </div>
        </div>
        )}
     </div>
    )}