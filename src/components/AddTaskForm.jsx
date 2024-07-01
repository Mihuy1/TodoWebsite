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
      <input type="text" name="name" placeholder="Task name" />
      <input type="text" name="details" placeholder="Task details" />
      <button type="submit">Add task</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
