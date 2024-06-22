import Task from './Task.jsx';
import AddTaskForm from './AddTaskForm.jsx';

import React, {useState} from 'react';

const initialTodoArray = [
  {
    id: 1,
    name: 'Task 1',
    details: 'This is Task 1',
    status: true,
  },
  {
    id: 2,
    name: 'Task 2',
    details: 'This is Task 2',
    status: false,
  },
  {
    id: 3,
    name: 'Task 3',
    details: 'This is Task 3',
    status: false,
  },
  {
    id: 4,
    name: 'Task 4',
    details: 'This is task 4',
    status: false,
  },
];

const Home = () => {
  const [todoArray, setTodoArray] = useState(initialTodoArray);
  const [newTaskName, setNewTaskName] = useState('');

  const handleStatusChange = (id, newStatus) => {
    const updatedTasks = todoArray.map((task) =>
      task.id === id ? {...task, status: newStatus} : task,
    );
    setTodoArray(updatedTasks);
  };

  const handleInputChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: todoArray.length + 1,
      name: newTaskName,
      details: `This is ${newTaskName}`,
      status: false,
    };
    setTodoArray([...todoArray, newTask]);
    setNewTaskName('');
  };

  return (
    <>
      <h2>Tasks</h2>
      <AddTaskForm
        newTaskName={newTaskName}
        handleInputChange={handleInputChange}
        handleAddTask={handleAddTask}
      />
      {todoArray.map((item) => (
        <Task key={item.id} item={item} onStatusChange={handleStatusChange} />
      ))}
    </>
  );
};
export default Home;
