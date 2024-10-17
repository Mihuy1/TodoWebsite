import PropTypes from 'prop-types';
import Button from './Button';

const EditTaskForm = (props) => {
  const {item, handleEditTask} = props;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newName = event.target.name.value;
        const newDetails = event.target.details.value;
        const newDate = event.target.date.value;

        handleEditTask(item.id, newName, newDetails, newDate);
      }}
    >
      <div className="edit_task_form">
        <textarea
          type="text"
          name="details"
          className="input__sm"
          defaultValue={item.details}
          rows={4}
          cols={40}
        />
        <input
          name="date"
          aria-label="Date and time"
          type="datetime-local"
          defaultValue={item.date}
        />{' '}
      </div>
      <Button className="edit__button" buttonText="Edit Task" />
    </form>
  );
};

EditTaskForm.propTypes = {
  item: PropTypes.object.isRequired,
  handleEditTask: PropTypes.func.isRequired,
};

export default EditTaskForm;
