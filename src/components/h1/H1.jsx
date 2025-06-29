import styles from './H1.module.css';

export const H1 = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};
