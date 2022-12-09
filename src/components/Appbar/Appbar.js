import { useAuth } from 'components/hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </header>
  );
};
