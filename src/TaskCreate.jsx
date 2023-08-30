import { useState } from 'react';

function TaskCreate({ onCreate, task, updateTaskForm, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.textArea : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !taskDesc) {
      alert("Lütfen tüm alanları eksiksiz doldurunuz!");
      return;
    }

    if (updateTaskForm) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle('');
    setTaskDesc('');
  };

  return (
    <div>
      {' '}
      {updateTaskForm ? (
        <div className="taskUpdate">
          <h3 style={{textAlign:"center"}}>Task Edit</h3>
          <form className="taskForms">
            <label className="task-label">Heading</label>
            <input
              value={title}
              onChange={handleChange}
              className="taskInput"
            />
            <label className="task-label">Description</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="taskInput"
              rows={8}
            />
            <button
              className="editButton"
              onClick={handleSubmit}
            >
              EDIT
            </button>
          </form>
        </div>
      ) : (
        <div className="taskFormArea">
      <h1 style={{ textAlign: "center" }}>TASKLIST</h1>
      <form className="taskForm">
        <label>Heading</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title"
        />
        <label>Description</label>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          rows={14}
        />
        <button className="createButton" onClick={handleSubmit}>
          CREATE
        </button>
      </form>
    </div>
      )}
    </div>
  );
}

export default TaskCreate;
