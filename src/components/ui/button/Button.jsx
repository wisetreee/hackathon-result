import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ variant, onClick, type, children }) => {
  const buttonClass = [
    styles.button,
    type === 'icon' && styles.iconButton,
    type === 'round' && styles.roundButton,
    variant === 'in-card' && styles.inCard,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  contentColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'round', 'icon']),
  variant: PropTypes.oneOf(['in-card']),
  children: PropTypes.node,
};
