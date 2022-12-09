import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
import { passwordShow } from 'components/function/passwordShow';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value.toLowerCase(),
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label className={css.form__label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.form__label}>
        Password
        <input type="password" name="password" id='input-password' />
        <span className={css.span_visible_password} onClick={passwordShow}></span>
      </label>
      <Button type="submit" className={css.form__btn}>Log In</Button>
    </form>
  );
};