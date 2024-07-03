import PropTypes from 'prop-types';

const AddTaskForm = (props) => {
  const {handleAddTask} = props;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newTaskName = event.target.name.value;
        const newTaskDetails = event.target.details.value;
        handleAddTask(newTaskName, newTaskDetails);
      }}
    >
      <input
        type="text"
        name="name"
        className="input__lg"
        placeholder="Task name"
      />
      <input
        type="text"
        name="details"
        className="input__lg"
        placeholder="Task details"
      />
      <button type="submit">Add task</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
