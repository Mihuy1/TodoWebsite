import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Task = (props) => {
  const {item, onStatusChange, handleSaveTask, handleEditTask, editingTaskId} =
    props;

  const handleCheckboxChange = (event) => {
    onStatusChange(item.id, event.target.checked);
  };

  return (
    <>
      <h4>{item.name}</h4>
      <input
        type="checkbox"
        checked={item.status}
        onChange={handleCheckboxChange}
      />{' '}
      {item.status ? 'True' : 'False'}
      <button onClick={() => handleEditTask(item.id)}>Edit</button>
      {editingTaskId === item.id && (
        <>
          <form onSubmit={(event) => handleSaveTask(event, item.id)}>
            <input type="text" name="name" defaultValue={item.name} />
            <input type="text" name="details" defaultValue={item.details} />
            <button type="submit">Save</button>
          </form>
        </>
      )}
      <Link to="/singleView" state={{item}}>
        Show
      </Link>{' '}
    </>
  );
};

Task.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default Task;
