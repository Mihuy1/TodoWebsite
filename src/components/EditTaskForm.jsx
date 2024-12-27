import PropTypes from 'prop-types';
import Button from './Button';

const EditTaskForm = (props) => {
  const {item, handleEditTask, close} = props;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newName = event.target.name.value;
        const newDetails = event.target.details.value;
        const newDate = event.target.date.value;
        const newCritical = event.target.critical.checked;
        const newGroup = event.target.group.value;

        handleEditTask(
          item.id,
          newName,
          newDetails,
          newDate,
          newCritical,
          newGroup,
        );
        close();
      }}
    >
      <div className="edit_task_form">
        <input
          type="text"
          name="name"
          className="input__lg"
          defaultValue={item.name}
          placeholder="Task Name"
        />
        <input
          type="text"
          name="details"
          className="input__sm"
          defaultValue={item.details}
          placeholder="Details"
        />
        <input
          name="date"
          aria-label="Date and time"
          type="datetime-local"
          defaultValue={item.date}
        />{' '}
        <label htmlFor="critical"> Critical:</label>
        <input
          type="checkbox"
          name="critical"
          id="critical"
          defaultChecked={item.critical}
        />
      </div>
      <div>
        <label htmlFor="group">Group:</label>
        <select name="group" id="group" defaultValue={item.group}>
          <option value={'personal'}>Personal</option>
          <option value={'work'}>Work</option>
        </select>
      </div>
      <Button className="edit__button" buttonText="Edit Task" />
    </form>
  );
};

EditTaskForm.propTypes = {
  item: PropTypes.object.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default EditTaskForm;
