import React from 'react';
import PropTypes from 'prop-types';

const AddTaskForm = ({newTaskName, handleInputChange, handleAddTask}) => {
  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={newTaskName}
        onChange={handleInputChange}
        placeholder="Enter a new task name"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add Task
      </button>
    </form>
  );
};

AddTaskForm.propTypes = {
  newTaskName: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
