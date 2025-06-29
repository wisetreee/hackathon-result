// Slider.tsx
import styles from './Slider.module.css';

export const Slider = ({
  photos,
  currentIndex,
  goToPrev,
  goToNext,
  handleSetCurrentIndex,
}) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <button
          className={styles.arrowButton}
          onClick={goToPrev}
          aria-label="Previous photo"
        >
          <span className={styles.arrowIcon}>{'<'}</span>
        </button>

        <div className={styles.imageContainer}>
          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].name}
            className={styles.sliderImage}
          />
          <div className={styles.caption}>{photos[currentIndex].name}</div>
        </div>

        <button
          className={styles.arrowButton}
          onClick={goToNext}
          aria-label="Next photo"
        >
          <span className={styles.arrowIcon}>{'>'}</span>
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {photos.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => handleSetCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
