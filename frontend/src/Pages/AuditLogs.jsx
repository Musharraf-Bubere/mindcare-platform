import { useNavigate } from "react-router-dom";

function AuditLogs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-10">
        <h1 className="text-5xl font-bold mb-4">
          Audit Logs
        </h1>

        <p className="text-lg">
          View privacy-related account activities.
        </p>
      </div>

      {/* Audit Log Card */}
      <div className="p-10">

        <div className="bg-white p-8 rounded-xl shadow max-w-4xl">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="border-b pb-3">
              <p className="font-semibold">
                Privacy Settings Updated
              </p>
              <p className="text-gray-500 text-sm">
                24 June 2026 - 10:15 AM
              </p>
            </div>

            <div className="border-b pb-3">
              <p className="font-semibold">
                Consent Preferences Updated
              </p>
              <p className="text-gray-500 text-sm">
                23 June 2026 - 04:20 PM
              </p>
            </div>

            <div className="border-b pb-3">
              <p className="font-semibold">
                Personal Data Downloaded
              </p>
              <p className="text-gray-500 text-sm">
                22 June 2026 - 09:45 AM
              </p>
            </div>

          </div>

          <div className="mt-8">

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

export default AuditLogs;