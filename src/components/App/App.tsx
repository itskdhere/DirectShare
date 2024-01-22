import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Send from '../../pages/Send';
import Receive from '../../pages/Receive';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/send' element={<Send />} />
      <Route path='/receive' element={<Receive />} />
    </Routes>
  )
}

export default App;
