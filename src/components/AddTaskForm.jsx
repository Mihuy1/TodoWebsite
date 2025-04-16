import PropTypes from 'prop-types';
import Button from './Button';
import {IoRepeat} from 'react-icons/io5';
import {useState} from 'react';
import RepeatModal from './RepeatModal';

const AddTaskForm = (props) => {
  const {handleAddTask, groups, setGroups} = props;
  const [showInput, setShowInput] = useState(false);
  const [newGroup, setNewGroup] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repeatFreq, setRepeatFreq] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleRepeatChange = (value) => {
    setRepeatFreq(value);
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    if (event.target.value === 'new') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleAddGroup = () => {
    if (newGroup.trim() && !groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
      setNewGroup('');
      setShowInput(false);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newTaskName = event.target.name.value;
        const newTaskDetails = event.target.details.value;
        const newTaskDate = event.target.date.value;
        const taskCritical = event.target.critical.checked;
        const taskGroup = event.target.group.value;

        if (taskGroup === 'new') {
          alert('Please choose or create a group');
          return;
        }

        if (newTaskName == null) {
          alert('Fill task name.');
          return;
        }

        handleAddTask(
          newTaskName,
          newTaskDetails,
          newTaskDate,
          taskCritical,
          taskGroup,
        );

        event.target.reset();
      }}
    >
      <div className="add__task__form">
        <input
          type="text"
          name="name"
          className="input__lg"
          placeholder="Clean house tomorrow afternoon"
        />
        <input
          type="text"
          name="details"
          className="input__sm"
          placeholder="Description"
        />
      </div>

      <div>
        <label htmlFor="group">Group:</label>
        <select name="group" id="group" onChange={handleChange}>
          {groups.map((group) => (
            <option key={group} value={group}>
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </option>
          ))}
          <option value="new">+ Create New Group</option>
        </select>

        {showInput && (
          <div>
            <input
              type="text"
              placeholder="Enter new group name"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
            ></input>
            <Button
              className="add__button"
              buttonText="Add Group"
              onClick={handleAddGroup}
            ></Button>
          </div>
        )}
      </div>

      <label htmlFor="critical"> Critical:</label>
      <input type="checkbox" name="critical" id="critical" />

      <button type="button" onClick={handleOpenModal}>
        <IoRepeat />
      </button>
      <p>Repeat: {repeatFreq || 'None Selected'}</p>

      {isModalOpen && (
        <RepeatModal onClose={handleCloseModal} onSelect={handleRepeatChange} />
      )}

      <input name="date" aria-label="Date and time" type="datetime-local" />

      <Button className="add__button" buttonText="Add Task" />
    </form>
  );
};

AddTaskForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  groups: PropTypes.array.isRequired,
  setGroups: PropTypes.func.isRequired,
};

export default AddTaskForm;
