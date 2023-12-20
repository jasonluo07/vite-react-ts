import styles from './Attribution.module.scss';

const Attribution = () => {
  return (
    <div className={styles.attribution}>
      Coded by{' '}
      <a href="https://github.com/jasonluo07" target="_blank">
        Jason Luo
      </a>
      . Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      .
    </div>
  );
};

export default Attribution;
