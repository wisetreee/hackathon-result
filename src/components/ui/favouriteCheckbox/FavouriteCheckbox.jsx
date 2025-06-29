import { Star } from 'lucide-react';
import { Button } from '../button/Button';

export const FavouriteCheckbox = ({ isFavourite, onChange }) => {
  return (
    <Button type="icon" onClick={onChange}>
      {isFavourite ? (
        <Star fill="var(--accent-blue)" />
      ) : (
        <Star color="var(--accent-blue)" />
      )}
    </Button>
  );
};
