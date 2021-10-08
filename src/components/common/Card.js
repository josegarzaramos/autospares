import PropTypes from 'prop-types';

function Card({ children }) {
  return <div className="card-shadow w-2/12">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
