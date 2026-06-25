import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getPrivacySettings,
  savePrivacySettings
} from "../Services/privacyService";

function PrivacySettings() {

  const navigate = useNavigate();

  const [profilePublic, setProfilePublic] = useState(false);
  const [shareResults, setShareResults] = useState(true);
  const [therapistMessaging, setTherapistMessaging] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  useEffect(() => {

    loadSettings();

  }, []);

  const loadSettings = async () => {

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      const response = await getPrivacySettings(user.id);

      const settings = response.settings;

      setProfilePublic(settings.profile_public);

      setShareResults(settings.share_assessment);

      setTherapistMessaging(settings.therapist_messaging);

      setEmailNotifications(settings.email_notifications);

    } catch (error) {

      console.log(error);

    }

  };

  const handleSave = async () => {

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      await savePrivacySettings({

        user_id: user.id,

        // Existing Privacy Fields
        therapist_access: false,
        research_usage: false,

        // Existing
        email_notifications: emailNotifications,

        // New Fields
        profile_public: profilePublic,

        share_assessment: shareResults,

        therapist_messaging: therapistMessaging

      });

      alert("Privacy settings updated successfully!");

    } catch (error) {

      console.log(error);

      alert("Unable to save settings.");

    }

  };

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Hero */}

      <div className="bg-blue-600 text-white py-16 px-10">

        <h1 className="text-5xl font-bold mb-4">

          Privacy Settings

        </h1>

        <p className="text-lg">

          Control how your information is shared and displayed.

        </p>

      </div>

      {/* Card */}

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
                onChange={() =>
                  setProfilePublic(!profilePublic)
                }
                className="w-5 h-5"
              />

              Make Profile Public

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={shareResults}
                onChange={() =>
                  setShareResults(!shareResults)
                }
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Save Settings
            </button>

            <button
              onClick={() => navigate("/privacy")}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
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