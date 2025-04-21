import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TVPlayer from './pages/TVPlayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tv" element={<TVPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
