
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEditTask = (taskId, text) => {
    setEditingTaskId(taskId);
    setEditingText(text);
  };

  const handleSaveEdit = (taskId) => {
    dispatch(editTask(taskId, editingText));
    setEditingTaskId(null);
    setEditingText("");
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editingTaskId === task.id ? (
            <>
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(task.id)}>OK</button>
            </>
          ) : (
            <>
              <span
                onClick={() => handleToggleTask(task.id)}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.text}
              </span>
              <button className="edit-btn" onClick={() => handleEditTask(task.id, task.text)}>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
