//* Parent Component - frontend router (React Router) renders Components (pages)

import './App.css';
// BrowserRouter: wraps all routes and enables navigation for client side
// Routes: holds multiple Route components
// Route: defines a path & the component that should be displayed
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// importing the 3 pages that user can nivigate to (pages)
import Home from './pages/Home';
import Confirmation from './pages/Confirmation';
import Decline from './pages/Decline';

// React component
function App() {
  // everything in here gets rendered to the browser
  return (
    <div>
      {/* BrowserRouter: tells React how to handle each page navigation */}
      <BrowserRouter>
        {/* Routes component holds all routes. Acts as a container for diff pages */}
        {/* everything inside this reloads */}
        <Routes>
          {/* depending what the url is, React will show the given component/ page */}
          <Route path='/' element={<Home />} />
          <Route path='/confirmation' element={<Confirmation />} />
          <Route path='/decline' element={<Decline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// export App component so that it can be used in Main.jsx (main entry file)
export default App;
