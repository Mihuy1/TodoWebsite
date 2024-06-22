import PropTypes from 'prop-types';

const Task = (props) => {
  const {item, onStatusChange} = props;

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
