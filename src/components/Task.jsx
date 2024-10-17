import PropTypes from 'prop-types';
import Button from './Button';
import {useState} from 'react';
import EditTaskForm from './EditTaskForm';

const Task = (props) => {
  const {item, onStatusChange, handleEditTask, handleDeleteTask} = props;

  const [isViewing, setIsViewing] = useState(false);
  const [isChecked, setIsChecked] = useState(item.status);

  const handleCheckboxChange = (event) => {
    onStatusChange(item.id, event.target.checked);
    setIsChecked(event.target.checked);
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
        <p className={isChecked ? 'strikethrough' : ''}> {item.name}</p>
        <div>
          <Button
            className="button__view"
            onClick={() => setIsViewing(!isViewing)}
            buttonText={isViewing ? 'Hide' : 'View'}
          />
          <Button
            className="button__delete"
            onClick={() => handleDeleteTask(item.id)}
            buttonText="Delete"
          />
        </div>
      </div>
      <div>
        {isViewing && (
          <EditTaskForm item={item} handleEditTask={handleEditTask} />
        )}
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
