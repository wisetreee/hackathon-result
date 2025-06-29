import PropTypes from 'prop-types';
import styles from './UserCard.module.css';
import { Button } from '../button/Button';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../badge/Badge';
import { FavouriteCheckbox } from '../favouriteCheckbox/FavouriteCheckbox';

export const UserCard = ({
  firstName,
  lastName,
  tags,
  description,
  footerText,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.userContent}>
        <div className={styles.imageAndHeaderData}>
          <div className={styles.circleImage}>
            <img src={imageUrl}></img>
          </div>
          <div className={styles.headerData}>
            <h2>{firstName + ' ' + lastName}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.tagsContainer}>
              {tags?.map((tag) => (
                <Badge text={tag} />
              ))}
            </div>
          </div>
        </div>
        <p className={styles.footerText}>{footerText}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <FavouriteCheckbox isFavourite={false} onChange={() => {}} />
        <Button type="round" variant="in-card">
          <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
