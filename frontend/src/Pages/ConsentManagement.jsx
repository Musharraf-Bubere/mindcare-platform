import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ConsentManagement() {
  const navigate = useNavigate();

  const [therapistAccess, setTherapistAccess] = useState(false);
  const [researchUsage, setResearchUsage] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);

  const handleSave = () => {
    alert("Consent preferences saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-10">
        <h1 className="text-5xl font-bold mb-4">
          Consent Management
        </h1>

        <p className="text-lg">
          Manage how your personal information can be used and shared.
        </p>
      </div>

      {/* Content Section */}
      <div className="p-10">

        <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

          <label className="flex items-center gap-3 mb-5 text-lg">
            <input
              type="checkbox"
              checked={therapistAccess}
              onChange={() => setTherapistAccess(!therapistAccess)}
              className="w-5 h-5"
            />
            Allow Therapist Access To My Data
          </label>

          <label className="flex items-center gap-3 mb-5 text-lg">
            <input
              type="checkbox"
              checked={researchUsage}
              onChange={() => setResearchUsage(!researchUsage)}
              className="w-5 h-5"
            />
            Allow Research Usage
          </label>

          <label className="flex items-center gap-3 mb-8 text-lg">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() =>
                setEmailNotifications(!emailNotifications)
              }
              className="w-5 h-5"
            />
            Receive Email Notifications
          </label>

          <div className="flex gap-4">

            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Save Preferences
            </button>

            <button
              onClick={() => navigate("/privacy")}
              className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition"
            >
              Back
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ConsentManagement;