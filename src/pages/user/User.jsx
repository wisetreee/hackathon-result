import { useParams } from 'react-router-dom';
import { Slider } from './components';
import { useState } from 'react';

export const User = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();

  const userPhotos = [
    {
      url: 'https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled',
      name: 'Мое фото на море',
    },
    {
      url: 'https://i.pinimg.com/236x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg',
      name: 'Моя работа',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswj4bdSqzwo-AiF0yOoJg9PtNrk1-IbTjxA&s',
      name: 'Мое хобби',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWiH3hZCawR24AVEfU9Z2NrfGXUAKNVDtiw&s',
      name: 'Моя дача',
    },
    {
      url: 'https://711515.selcdn.ru/recycleCDN/main/9/9ead29f7ebb448d64cd47e567738b77a_thumbnail.jpg',
      name: 'Все мое',
    },
  ];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? userPhotos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === userPhotos.length - 1 ? 0 : prev + 1));
  };

  const handleSetCurrentIndex = (index) => setCurrentIndex(index);

  return (
    <div>
      <h1>Страница пользователя</h1>
      <p>ID пользователя: {id}</p>
      <div>
        {userPhotos.length === 0 ? (
          <div>Нет фотографий для отображения</div>
        ) : (
          <Slider
            photos={userPhotos}
            currentIndex={currentIndex}
            goToPrev={goToPrev}
            goToNext={goToNext}
            handleSetCurrentIndex={handleSetCurrentIndex}
          />
        )}
      </div>
    </div>
  );
};
