import { Button } from '../button/button';
import { H1 } from '../h1/H1';
import Toggle from '../toggle/Toggle';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.avatar}>{/* сюда можно ссылку */}</div>
        <H1 title={'Название команды'} />
      </div>
      <nav className={styles.nav}>
        <Button
          title={'Услуги'}
          onClick={() => {
            // можно navigate, а можно и ссылки...
          }}
        />
        <Button
          title={'Избранные'}
          onClick={() => {
            // можно navigate, а можно и ссылки...
          }}
        />
        <Toggle />
        <div className={styles.button}>Тёмная тема</div>
      </nav>
    </header>
  );
};
