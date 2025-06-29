import { Routes, Route } from 'react-router-dom';
import { Home, User, Favorites } from './pages';
import { Header } from './components';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
