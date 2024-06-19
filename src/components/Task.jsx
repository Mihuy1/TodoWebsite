import PropTypes from 'prop-types';

const Task = (props) => {
  const {item} = props;

  return <h3>{item.name}</h3>;
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Task;
