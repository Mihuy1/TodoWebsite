import PropTypes from 'prop-types';

const EditTaskForm = (props) => {
  const {item, handleEditTask} = props;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newName = event.target.name.value;
        const newDetails = event.target.details.value;
        handleEditTask(item.id, newName, newDetails);
        console.log('item.id', item.id);
        console.log('newName', newName);
        console.log('newDetails', newDetails);
        console.log('event', event);
      }}
    >
      <input
        type="text"
        name="name"
        className="input__sm"
        defaultValue={item.name}
      />
      <input
        type="text"
        name="details"
        className="input__sm"
        defaultValue={item.details}
      />
      <button type="submit">Save</button>
    </form>
  );
};

EditTaskForm.propTypes = {
  item: PropTypes.object.isRequired,
  handleEditTask: PropTypes.func.isRequired,
};

export default EditTaskForm;
