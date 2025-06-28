import { useState } from 'react';
import styles from './Toggle.module.css';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.toggleLabel}>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className={styles.toggleInput}
        />
        <span
          className={`${styles.toggleSlider} ${isOn ? styles.on : ''}`}
        ></span>
      </label>
    </div>
  );
};

export default Toggle;
