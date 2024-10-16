import PropTypes from 'prop-types';

function Button(props) {
  const {buttonText, onClick, className} = props;
  return (
    <>
      <button className={className} onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
