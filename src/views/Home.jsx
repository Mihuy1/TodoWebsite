import AddTaskForm from '../components/AddTaskForm.jsx';
import Task from '../components/Task.jsx';
import {useTask} from '../hooks/ApiHooks.js';

const Home = () => {
  const {
    todoArray,
    handleAddTask,
    handleEditTask,
    handleSaveTask,
    onStatusChange,
  } = useTask();

  return (
    <>
      {' '}
      <h2>Tasks</h2>
      <AddTaskForm handleAddTask={handleAddTask} />
      {todoArray.map(
        (item) => (
          console.log('item', item),
          (
            <Task
              key={item.id}
              item={item}
              handleEditTask={handleEditTask}
              handleSaveTask={handleSaveTask}
              onStatusChange={onStatusChange}
            />
          )
        ),
      )}
    </>
  );
};
export default Home;
