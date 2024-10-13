import PropTypes from 'prop-types';

const Task = (props) => {
  const {item, onStatusChange} = props;

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
