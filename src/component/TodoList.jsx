import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') {
      return; // Don't add empty tasks
    }
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={addTask}>
        <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task" />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
