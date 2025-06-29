import { Link } from 'react-router-dom';
export const Home = () => {
  return (
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
  );
};
