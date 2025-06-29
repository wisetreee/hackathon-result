import PropTypes from 'prop-types';
import styles from './Toggle.module.css';

export const Toggle = ({ isOn, onChange }) => {
  return (
    <div className={styles.toggleContainer}>
      <label className={styles.toggleLabel}>
        <input
          type="checkbox"
          checked={isOn}
          onChange={onChange}
          className={styles.toggleInput}
        />
        <span
          className={`${styles.toggleSlider} ${isOn ? styles.on : ''}`}
        ></span>
      </label>
    </div>
  );
};

Toggle.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
