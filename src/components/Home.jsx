import Task from './Task.jsx';

const todoArray = [
  {
    id: 1,
    name: 'Task 1',
    details: 'This is Task 1',
  },
  {
    id: 2,
    name: 'Task 2',
    details: 'This is Task 2',
  },
  {
    id: 3,
    name: 'Task 3',
    details: 'This is Task 3',
  },
];

const Home = () => {
  return (
    <>
      <h2>My Tasks</h2>
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      {todoArray.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </>
  );
};
export default Home;
