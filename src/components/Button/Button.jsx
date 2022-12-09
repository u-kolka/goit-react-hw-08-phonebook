import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({onClick, className, children}) => {

  return (
    <button className={`${css.button} ${className}`} onClick={onClick}>{children}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};