import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PrivacySettings() {
  const navigate = useNavigate();

  const [profilePublic, setProfilePublic] = useState(false);
  const [shareResults, setShareResults] = useState(false);
  const [therapistMessaging, setTherapistMessaging] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);

  const handleSave = () => {
    alert("Privacy settings updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-10">
        <h1 className="text-5xl font-bold mb-4">
          Privacy Settings
        </h1>

        <p className="text-lg">
          Control how your information is shared and displayed.
        </p>
      </div>

      {/* Settings Card */}
      <div className="p-10">

        <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Privacy Preferences
          </h2>

          <div className="space-y-5">

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={profilePublic}
                onChange={() => setProfilePublic(!profilePublic)}
                className="w-5 h-5"
              />
              Make Profile Public
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={shareResults}
                onChange={() => setShareResults(!shareResults)}
                className="w-5 h-5"
              />
              Share Assessment Results With Therapists
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={therapistMessaging}
                onChange={() =>
                  setTherapistMessaging(!therapistMessaging)
                }
                className="w-5 h-5"
              />
              Allow Therapist Messaging
            </label>

            <label className="flex items-center gap-3">
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

          </div>

          <div className="flex gap-4 mt-8">

            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Save Settings
            </button>

            <button
              onClick={() => navigate("/privacy")}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
            >
              Back
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PrivacySettings;