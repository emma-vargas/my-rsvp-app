//* Parent Component - renders routers (pages)

import './App.css';
import { BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Confirmation from './pages/Confirmation';
import Decline from './pages/Decline';

function App() {
  // everything in here gets rendered to the browser
  return (
    <div>
      <BrowserRouter>
        {/* everything inside this reloads */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/confirmation' element={<Confirmation />} />
          <Route path='/decline' element={<Decline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
