import styles from './Badge.module.css';

export const Badge = ({ text }) => {
  return <div className={styles.badge}>{text}</div>;
};
