import React from 'react';
import PropTypes from 'prop-types';

const EditTaskForm = (props) => {
  const {item, handleSaveTask} = props;

  return (
    <form onSubmit={(event) => handleSaveTask(event, item.id)}>
      <input type="text" name="name" defaultValue={item.name} />
      <input type="text" name="details" defaultValue={item.details} />
      <button type="submit">Save</button>
    </form>
  );
};

EditTaskForm.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  handleSaveTask: PropTypes.func.isRequired,
};

export default EditTaskForm;
