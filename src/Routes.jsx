// src/Routes.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import DonateBooksOrMoney from './components/DonateBooksOrMoney';
import FindOrExchangeBooks from './components/FindOrExchangeBooks';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="/donate-books-or-money" element={<DonateBooksOrMoney />} />
      <Route path="/find-or-exchange-books" element={<FindOrExchangeBooks />} />
    </Routes>
  </Router>
);

export default AppRoutes;
