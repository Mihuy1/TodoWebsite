import {useEffect, useState} from 'react';

const useTask = () => {
  const [todoArray, setTodoArray] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTodoArray(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todoArray));
  }, [todoArray]);

  const handleAddTask = (newTaskName, newTaskDetails) => {
    const newTask = {
      id: todoArray.length + 1,
      name: newTaskName,
      details: newTaskDetails,
      status: false,
    };
    setTodoArray([...todoArray, newTask]);
  };

  const handleSaveTask = (id, newName, newDetails) => {
    const updatedTasks = todoArray.map((task) =>
      task.id === id ? {...task, name: newName, details: newDetails} : task,
    );
    setTodoArray(updatedTasks);
    console.log('updatedTasks', updatedTasks);
    console.log('new todoArray', todoArray);
  };

  const handleEditTask = (id, newName, newDetails) => {
    const updatedTasks = todoArray.map((task) =>
      task.id === id ? {...task, name: newName, details: newDetails} : task,
    );
    setTodoArray(updatedTasks);
    console.log('newName in handleEditTask', newName);
    console.log('newDetails in handleEditTask', newDetails);
    console.log('updatedTasks', updatedTasks);
    console.log('new todoArray', todoArray);
  };
  const onStatusChange = (id, newStatus) => {
    const updatedTasks = todoArray.map((task) =>
      task.id === id ? {...task, status: newStatus} : task,
    );
    setTodoArray(updatedTasks);
  };

  return {
    todoArray,
    handleAddTask,
    handleSaveTask,
    handleEditTask,
    onStatusChange,
  };
};

export {useTask};
