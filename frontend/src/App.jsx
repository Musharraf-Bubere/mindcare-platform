import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";

import ClientDashboard from "./Pages/ClientDashboard";
import TherapistDashboard from "./Pages/TherapistDashboard";
import AdminDashboard from "./Pages/AdminDashboard";

import ClientAssessmentForm from "./Pages/ClientAssessmentForm";
import TherapistRecommendation from "./Pages/TherapistRecommendation";
import Profile from "./Pages/Profile";
import AvailabilityManagement from "./Pages/AvailabilityManagement";
import TherapistAssessmentForm from "./Pages/TherapistAssessmentForm";
import PrivacyDashboard from "./Pages/PrivacyDashboard";
import ConsentManagement from "./Pages/ConsentManagement";
import DataAccess from "./Pages/DataAccess";
import DataDeletion from "./Pages/DataDeletion";
import DownloadData from "./Pages/DownloadData";
import PrivacySettings from "./Pages/PrivacySettings";
import AuditLogs from "./Pages/AuditLogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/therapist-dashboard" element={<TherapistDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/client-assessment" element={<ClientAssessmentForm />} />
        <Route path="/therapist-assessment" element={<TherapistAssessmentForm />} />
        <Route path="/recommendation" element={<TherapistRecommendation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<PrivacyDashboard />} />
        <Route path="/consent" element={<ConsentManagement />} />
        <Route path="/data-access" element={<DataAccess />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/download-data" element={<DownloadData />} />
        <Route path="/privacy-settings" element={<PrivacySettings />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/availability" element={<AvailabilityManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;