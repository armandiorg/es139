import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Onboarding from './pages/Onboarding';
import Quiz from './pages/Quiz';
import PersonalityResults from './pages/PersonalityResults';
import InterestSelection from './pages/InterestSelection';
import Home from './pages/Home';
import InviteFriends from './pages/InviteFriends';
import Search from './pages/Search';
import MatchResults from './pages/MatchResults';
import Messages from './pages/Messages';
import FutureVision from './pages/FutureVision';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="/onboarding" replace />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<PersonalityResults />} />
            <Route path="/interests" element={<InterestSelection />} />
            <Route path="/home" element={<Home />} />
            <Route path="/invite" element={<InviteFriends />} />
            <Route path="/search" element={<Search />} />
            <Route path="/matches" element={<MatchResults />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/future" element={<FutureVision />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;