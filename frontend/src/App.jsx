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
import EmergencySupport from "./pages/EmergencySupport";

import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Protected Routes */}

        <Route
          path="/client-dashboard"
          element={
            <ProtectedRoute>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/therapist-dashboard"
          element={
            <ProtectedRoute>
              <TherapistDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client-assessment"
          element={
            <ProtectedRoute>
              <ClientAssessmentForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/therapist-assessment"
          element={
            <ProtectedRoute>
              <TherapistAssessmentForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recommendation"
          element={
            <ProtectedRoute>
              <TherapistRecommendation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/privacy"
          element={
            <ProtectedRoute>
              <PrivacyDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/consent"
          element={
            <ProtectedRoute>
              <ConsentManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/data-access"
          element={
            <ProtectedRoute>
              <DataAccess />
            </ProtectedRoute>
          }
        />

        <Route
          path="/data-deletion"
          element={
            <ProtectedRoute>
              <DataDeletion />
            </ProtectedRoute>
          }
        />

        <Route
          path="/download-data"
          element={
            <ProtectedRoute>
              <DownloadData />
            </ProtectedRoute>
          }
        />

        <Route
          path="/privacy-settings"
          element={
            <ProtectedRoute>
              <PrivacySettings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/audit-logs"
          element={
            <ProtectedRoute>
              <AuditLogs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/availability"
          element={
            <ProtectedRoute>
              <AvailabilityManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/emergency-support"
          element={
            <ProtectedRoute>
              <EmergencySupport />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;