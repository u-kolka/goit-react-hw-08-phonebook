import PropTypes from 'prop-types';
import css from "./Wrapper.module.css";

export const Wrapper = ({ children }) => {
    return <div className={css.wrapper__center}>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.array.isRequired,
};