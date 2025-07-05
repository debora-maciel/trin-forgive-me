import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import History from './pages/History';
import InterestingVideos from './pages/InterestingVideos';
// import SendMessage from './pages/SendMessage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/interesting-videos" element={<InterestingVideos />} />
        {/* <Route path="/send-message" element={<SendMessage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
