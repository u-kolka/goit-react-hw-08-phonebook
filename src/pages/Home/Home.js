import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.home__container}>
      <h1 className={css.home__title}>
        Your phonebook
      </h1>
      <ul>
        <li className={css.home__item}>
          <p className={css.home__text}>• Reliable and simple storage for your contacts.</p>
        </li>
        <li className={css.home__item}>
          <p className={css.home__text}>• Allows you to save memory on your device.</p>
        </li>
        <li className={css.home__item}>
          <p className={css.home__text}>• Quick access to your contacts from any device.</p>
        </li>
        <li className={css.home__item}>
          <p className={css.home__text}>Register and start using the unlimited space of the web phonebook!</p>
        </li>
      </ul>
    </div>
  );
}
