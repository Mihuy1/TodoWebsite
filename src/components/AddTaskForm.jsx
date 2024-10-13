import PropTypes from 'prop-types';
import Button from './Button';

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
      <Button buttonText="Add Task" />
    </form>
  );
};

AddTaskForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
