import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';

import Menu from 'components/Menu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='cardapio' element={<Cardapio />} />
        </Routes>
      </Router>
    </main>
  );
}