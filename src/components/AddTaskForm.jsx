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
        const newTaskDate = event.target.date.value;
        const taskCritical = event.target.critical.checked;

        handleAddTask(newTaskName, newTaskDetails, newTaskDate, taskCritical);
      }}
    >
      <div>
        <input
          type="text"
          name="name"
          className="input__lg"
          placeholder="Task name"
        />
        <input
          type="text"
          name="details"
          className="input__sm"
          placeholder="Task details"
        />
      </div>

      <label htmlFor="critical"> Critical:</label>
      <input type="checkbox" name="critical" id="critical" />

      <input name="date" aria-label="Date and time" type="datetime-local" />

      <Button className="add__button" buttonText="Add Task" />
    </form>
  );
};

AddTaskForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
