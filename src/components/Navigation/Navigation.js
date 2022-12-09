import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {

  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
    </nav>
  );
};