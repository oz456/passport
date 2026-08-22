import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';
import HomePage from './pages/HomePage';
import JourneyAssistant from './pages/JourneyAssistant';
import EligibilityChecker from './pages/EligibilityChecker';
import Dashboard from './pages/Dashboard';
import ApplicationTracker from './pages/ApplicationTracker';
import ApplicationWizard from './pages/ApplicationWizard';
import HelpCentre from './pages/HelpCentre';
import GrievanceCentre from './pages/GrievanceCentre';
import PskLocator from './pages/PskLocator';
import ProfileSettings from './pages/ProfileSettings';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyAssistant />} />
          <Route path="/eligibility" element={<EligibilityChecker />} />
          <Route path="/help" element={<HelpCentre />} />
          <Route path="/grievance" element={<GrievanceCentre />} />
          <Route path="/locate-psk" element={<PskLocator />} />
        </Route>

        {/* Authenticated Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track" element={<ApplicationTracker />} />
          <Route path="/apply" element={<ApplicationWizard />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}
