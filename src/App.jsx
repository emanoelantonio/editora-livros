import { Route, Routes } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import Design from './components/Design';
import Frontend from './components/Frontend';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Programacao from './components/Programacao';
import Topo from './components/Topo';

import './index.css';

const App = () => {
  return (
    <>
      <Topo />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/design" element={<Design />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default App;
