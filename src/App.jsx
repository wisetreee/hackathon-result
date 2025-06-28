import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, User, Favorites } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
