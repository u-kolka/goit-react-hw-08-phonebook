import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
import { passwordShow } from 'components/function/passwordShow';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label className={css.form__label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.form__label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.form__label}>
        Password
        <input type="password" name="password" id='input-password' />
        <span className={css.span_visible_password} onClick={passwordShow}></span>
      </label>
      <Button type="submit" className={css.form__btn}>Register</Button>
    </form>
  );
};