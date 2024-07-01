import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import EditTaskForm from './EditTaskForm';

const Task = (props) => {
  const {item, onStatusChange, handleEditTask} = props;

  const handleCheckboxChange = (event) => {
    onStatusChange(item.id, event.target.checked);
    console.log('item in handleCheckboxChange', item.id, event.target.checked);
  };

  console.log('item', item.id);

  return (
    <>
      <h4>{item.name}</h4>
      <input
        type="checkbox"
        checked={item.status}
        onChange={handleCheckboxChange}
      />{' '}
      {item.status ? 'True' : 'False'}
      <EditTaskForm item={item} handleEditTask={handleEditTask} />
      <Link to="/singleView" state={{item}}>
        Show
      </Link>{' '}
    </>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default Task;
