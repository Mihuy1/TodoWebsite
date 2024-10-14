import PropTypes from 'prop-types';

function Button(props) {
  const {buttonText, onClick} = props;
  return (
    <>
      <button className="custom-button" onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
