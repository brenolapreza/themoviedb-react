import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Info } from './pages/info';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" exact element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};
