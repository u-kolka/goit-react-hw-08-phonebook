import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'components/hooks/useAuth';
import { Button } from 'components/Button/Button';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu__box}>
      <NavLink to='/contacts' className={css.link}>Welcome, {user.name}!</NavLink>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};