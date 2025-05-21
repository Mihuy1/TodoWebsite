import PropTypes from 'prop-types';
import Button from './Button';
import {useState} from 'react';
import RepeatModal from './RepeatModal';

const EditTaskForm = (props) => {
  const {item, handleEditTask, close} = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repeatFreq, setRepeatFreq] = useState(item.repeat || 'Failed');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleRepeatChange = (value) => {
    setRepeatFreq(value);
    setIsModalOpen(false);
  };

  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

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
          repeatFreq,
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
          defaultValue={formatDateForInput(item.date)}
        />
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

      {isModalOpen && (
        <RepeatModal
          initialValue={repeatFreq}
          onClose={handleCloseModal}
          onSelect={handleRepeatChange}
        />
      )}

      <div className="repeat-div">
        <button type="button" className="add__button" onClick={handleOpenModal}>
          {repeatFreq || 'Repeat'}
        </button>
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
