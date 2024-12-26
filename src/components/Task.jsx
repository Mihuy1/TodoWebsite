import PropTypes from 'prop-types';
import Button from './Button';
import {useState} from 'react';
import EditTaskForm from './EditTaskForm';
import Popup from 'reactjs-popup';
import './Task.css';

const Task = (props) => {
  const {item, onStatusChange, handleEditTask, handleDeleteTask} = props;

  const [isChecked, setIsChecked] = useState(item.status);

  const formatDate = (dateString) => {
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  const handleCheckboxChange = (event) => {
    onStatusChange(item.id, event.target.checked);
    setIsChecked(event.target.checked);
  };

  const isDatePassed = (dateString) => {
    const taskDate = new Date(dateString);
    const currentDate = new Date();
    return taskDate < currentDate;
  };

  return (
    <>
      <div className="task-container">
        <input
          className="c-cb"
          type="checkbox"
          checked={item.status}
          onChange={handleCheckboxChange}
        />{' '}
        <div
          className={`${isChecked ? 'strikethrough' : ''} ${isDatePassed(item.date) ? 'date-passed' : ''} ${item.critical ? 'critical' : ''}`}
        >
          <div className="task-details">
            <p>{item.name}</p>
            <p className="task-description">{item.details}</p>
            <p className="task-date">{formatDate(item.date)} </p>
          </div>
        </div>
        <div>
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
};

export default Task;
