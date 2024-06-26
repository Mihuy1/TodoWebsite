import {useLocation, useNavigate} from 'react-router-dom';

const SingleView = () => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();

  return (
    <div>
      <h2>{item && item.name}</h2>
      <p>{item && item.status ? 'True' : 'False'}</p>
      <p>{item && item.details}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

SingleView.propTypes = {};

export default SingleView;
