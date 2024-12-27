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

  const handleAddTask = (
    newTaskName,
    newTaskDetails,
    newTaskDate,
    taskCritical,
    taskGroup,
  ) => {
    const newTask = {
      id: todoArray.length + 1,
      name: newTaskName,
      details: newTaskDetails,
      date: newTaskDate,
      status: false,
      critical: taskCritical,
      group: taskGroup,
    };
    console.log('newTask', newTask);
    setTodoArray([...todoArray, newTask]);
  };

  const handleSaveTask = (id, newName, newDetails, newCritical, newGroup) => {
    const updatedTasks = todoArray.map((task) =>
      task.id === id
        ? {
            ...task,
            name: newName,
            details: newDetails,
            critical: newCritical,
            group: newGroup,
          }
        : task,
    );
    setTodoArray(updatedTasks);
    console.log('updatedTasks', updatedTasks);
    console.log('new todoArray', todoArray);
  };

  const handleEditTask = (
    id,
    newName,
    newDetails,
    newDate,
    newCritical,
    newGroup,
  ) => {
    const updatedTasks = todoArray.map((task) =>
      task.id === id
        ? {
            ...task,
            name: newName,
            details: newDetails,
            date: newDate,
            critical: newCritical,
            group: newGroup,
          }
        : task,
    );
    setTodoArray(updatedTasks);
    sortTasksByDate(todoArray);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = todoArray.filter((task) => task.id !== id);
    setTodoArray(updatedTasks);
  };

  const onStatusChange = (id, newStatus) => {
    const updatedTasks = todoArray.map((task) =>
      task.id === id ? {...task, status: newStatus} : task,
    );
    setTodoArray(updatedTasks);
  };

  const sortTasksByDate = (tasks) => {
    return tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  return {
    todoArray,
    handleAddTask,
    handleSaveTask,
    handleEditTask,
    handleDeleteTask,
    onStatusChange,
    sortTasksByDate,
  };
};

export {useTask};
