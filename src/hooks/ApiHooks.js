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

  const handleAddTask = (newTaskName, newTaskDetails, newTaskDate) => {
    const newTask = {
      id: todoArray.length + 1,
      name: newTaskName,
      details: newTaskDetails,
      date: newTaskDate,
      status: false,
    };
    console.log('newTask', newTask);
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

  const handleEditTask = (id, newName, newDetails, newDate) => {
    const updatedTasks = todoArray.map((task) =>
      task.id === id
        ? {...task, name: newName, details: newDetails, date: newDate}
        : task,
    );
    setTodoArray(updatedTasks);
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

  return {
    todoArray,
    handleAddTask,
    handleSaveTask,
    handleEditTask,
    handleDeleteTask,
    onStatusChange,
  };
};

export {useTask};
