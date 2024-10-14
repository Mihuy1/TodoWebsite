import PropTypes from 'prop-types';
import Button from './Button';
import {useState} from 'react';
import EditTaskForm from './EditTaskForm';

const Task = (props) => {
  const {item, onStatusChange, handleEditTask} = props;

  const [isViewing, setIsViewing] = useState(false);

  const handleCheckboxChange = (event) => {
    onStatusChange(item.id, event.target.checked);
    console.log('item in handleCheckboxChange', item.id, event.target.checked);
  };

  console.log('item', item.id);

  return (
    <>
      <div className="task-container">
        <input
          type="checkbox"
          checked={item.status}
          onChange={handleCheckboxChange}
        />{' '}
        <p>{item.name}</p>
        <Button
          onClick={() => setIsViewing(!isViewing)}
          buttonText={isViewing ? 'Hide' : 'View'}
        />
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
};

export default Task;
