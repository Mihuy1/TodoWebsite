import AddTaskForm from '../components/AddTaskForm.jsx';
import Task from '../components/Task.jsx';
import {useGroup} from '../context/GroupContext.jsx';
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

  const {group} = useGroup();

  let filteredTodoArray = todoArray;

  if (group !== 'all') {
    filteredTodoArray = todoArray.filter((task) => task.group == group);
  }

  return (
    <>
      {' '}
      <h1>Tasks</h1>
      <AddTaskForm handleAddTask={handleAddTask} />
      {filteredTodoArray.map((item) => (
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
