import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
