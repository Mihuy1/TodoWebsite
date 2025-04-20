import PropTypes from 'prop-types';
import Button from './Button';
import {useState, useEffect} from 'react';
import EditTaskForm from './EditTaskForm';
import Popup from 'reactjs-popup';
import './Task.css';

const Task = (props) => {
  const {
    item,
    onStatusChange,
    handleEditTask,
    handleDeleteTask,
    handleAddTask,
  } = props;

  const [isChecked, setIsChecked] = useState(item.status);

  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  useEffect(() => {
    setIsChecked(item.status);
  }, [item.status]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', options);
  };

  const handleCheckboxChange = (event) => {
    const newStatus = event.target.checked;

    setIsChecked(newStatus);
    onStatusChange(item.id, newStatus);

    if (newStatus && !item.hasCreatedRepeat) {
      setTimeout(() => {
        const taskWithUpdatedStatus = {...item, status: true};

        checkRepeat(taskWithUpdatedStatus);
      }, 100);
    }
  };

  const isDatePassed = (dateString) => {
    const taskDate = new Date(dateString);
    const currentDate = new Date();
    return taskDate < currentDate;
  };

  const checkRepeat = (task) => {
    console.log('Task being processed:', task);

    if (task.repeat === 'Never') {
      console.log('Never repeat');
      return;
    }

    if (isDatePassed(task.date) && task.status === true) {
      console.log('Creating repeating task');
      const newDate = calculateNextDate(task.date, task.repeat);

      handleAddTask(
        task.name,
        task.details,
        newDate,
        task.critical,
        task.group,
        task.repeat,
        false,
        false,
      );

      onStatusChange(task.id, task.status, true);
    }
  };

  const calculateNextDate = (dateString, repeatPattern) => {
    const newDate = new Date(dateString);

    switch (repeatPattern) {
      case 'Daily':
        newDate.setDate(newDate.getDate() + 1);
        break;
      case 'Weekly':
        newDate.setDate(newDate.getDate() + 7);
        break;
      case 'Monthly':
        newDate.setMonth(newDate.getMonth() + 1);
        break;
    }

    return newDate.toString();
  };

  return (
    <>
      <div className="task-container">
        <input
          className="c-cb"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />{' '}
        <div
          className={`${isChecked ? 'strikethrough' : ''} ${isDatePassed(item.date) ? 'date-passed' : ''} ${item.critical ? 'critical' : ''}`}
        >
          <div className="task-details">
            <p>{item.name}</p>
            <p className="task-description">{item.details}</p>
            <p className="task-date">{formatDate(item.date)} </p>
            <p className="task-repeat"> {item.repeat} </p>
          </div>
        </div>
        <div className="task-buttons">
          <Popup
            trigger={<Button className={'edit__button'} buttonText="Edit" />}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="content">
                  {' '}
                  <EditTaskForm
                    item={item}
                    handleEditTask={handleEditTask}
                    close={close}
                  />{' '}
                </div>
              </div>
            )}
          </Popup>
          <Button
            className="button__delete"
            onClick={() => handleDeleteTask(item.id)}
            buttonText="Delete"
          />
        </div>
      </div>
    </>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleSaveTask: PropTypes.func.isRequired,
};

export default Task;
