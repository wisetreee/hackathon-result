import React from 'react';
import { useParams } from 'react-router-dom';

export const User = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Страница пользователя</h1>
      <p>ID пользователя: {id}</p>
    </div>
  );
};
