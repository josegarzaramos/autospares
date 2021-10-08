/* eslint-disable react/prop-types */
import './Container.css';

const Container = ({ children }) => {
  return <div className="w-full main-container">{children}</div>;
};

export default Container;
