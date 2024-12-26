import AddTaskForm from '../components/AddTaskForm.jsx';
import Task from '../components/Task.jsx';
import {useTask} from '../hooks/ApiHooks.js';

const Home = () => {
  const {
    todoArray,
    handleAddTask,
    handleEditTask,
    handleSaveTask,
    handleDeleteTask,
    onStatusChange,
    sortTasksByDate,
  } = useTask();

  sortTasksByDate(todoArray);

  return (
    <>
      {' '}
      <h1>Tasks</h1>
      <AddTaskForm handleAddTask={handleAddTask} />
      {todoArray.map((item) => (
        <Task
          key={item.id}
          item={item}
          handleEditTask={handleEditTask}
          handleSaveTask={handleSaveTask}
          handleDeleteTask={handleDeleteTask}
          onStatusChange={onStatusChange}
        />
      ))}
    </>
  );
};
export default Home;
