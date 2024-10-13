import PropTypes from 'prop-types';

function Button(props) {
  const {buttonText} = props;
  return (
    <>
      <button className="custom-button">{buttonText}</button>
    </>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
