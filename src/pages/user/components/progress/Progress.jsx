import PropTypes from 'prop-types';
import styles from './Progress.module.css';

export const Progress = ({
  percent = 0,
  label = '',
  color = '#4CAF50',
  type = 'bar',
  size = 100,
  strokeWidth = 10,
}) => {
  const clampedPercent = Math.min(100, Math.max(0, percent));

  if (type === 'circle') {
    return (
      <div className={styles.circleContainer}>
        <svg
          className={styles.circleProgress}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <circle
            className={styles.circleBackground}
            cx={size / 2}
            cy={size / 2}
            r={(size - strokeWidth) / 2}
            strokeWidth={strokeWidth}
          />
          <circle
            className={styles.circleFill}
            cx={size / 2}
            cy={size / 2}
            r={(size - strokeWidth) / 2}
            strokeWidth={strokeWidth}
            stroke={color}
            strokeDasharray={`${(clampedPercent / 100) * Math.PI * (size - strokeWidth)} ${Math.PI * (size - strokeWidth)}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
          <text
            x="50%"
            y="50%"
            className={styles.circleText}
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {clampedPercent}%
          </text>
        </svg>
        {label && <div className={styles.label}>{label}</div>}
      </div>
    );
  }

  return (
    <div className={styles.barContainer}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.barBackground}>
        <div
          className={styles.barFill}
          style={{
            width: `${clampedPercent}%`,
            backgroundColor: color,
          }}
        >
          <span className={styles.percentText}>{clampedPercent}%</span>
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {
  percent: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.oneOf(['bar', 'circle']),
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};
