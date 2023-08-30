import { useState } from "react";

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || textArea.trim() === "") {
      setError(alert("Lütfen tüm alanları eksiksiz doldurunuz!"));
      return;
    }

    onCreate(title, textArea);
    setTitle("");
    setTextArea("");
    setError("");
  };

  return (
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
  );
}
