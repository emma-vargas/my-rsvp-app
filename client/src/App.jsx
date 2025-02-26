//* Parent Component - renders routers (pages)

import './App.css';
import { BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  // everything in here gets rendered to the browser
  return (
    <div>
      <BrowserRouter>
        {/* everything inside this reloads */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
