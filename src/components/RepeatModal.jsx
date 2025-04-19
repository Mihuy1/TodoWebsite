import PropTypes from 'prop-types';

function RepeatModal({onSelect, onClose}) {
  const options = ['Daily', 'Weekly', 'Monthly', 'Never'];

  const handleSelect = (value) => {
    onSelect(value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Repeat Frequency</h2>
        <ul>
          {options.map((option) => (
            <li key={option}>
              <button
                className="add__button"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        <button className="button__delete" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

RepeatModal.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RepeatModal;
