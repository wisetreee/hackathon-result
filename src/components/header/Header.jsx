import { useState } from 'react';
import { H1 } from '../h1/H1';
import Toggle from '../toggle/Toggle';
import styles from './Header.module.css';

export const Header = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.avatar} />
        <H1 title={'Название команды'} />
      </div>
      <nav className={styles.nav}>
        <th>
          <a href="...">Услуги</a>
        </th>
        <th className={styles.th}>
          <a href="/favorites">Избранные</a>
        </th>
        <th className={styles.toggle}>
          <Toggle isOn={isOn} handleToggle={handleToggle} />
          <div>Тёмная тема</div>
        </th>
      </nav>
    </header>
  );
};
