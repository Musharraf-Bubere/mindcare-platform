import { useNavigate } from "react-router-dom";

function PrivacyDashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-16 px-10">
                <h1 className="text-5xl font-bold mb-4">
                    Privacy Dashboard
                </h1>

                <p className="text-lg">
                    Control how your personal information is collected,
                    stored and shared on MindCare.
                </p>

                {/* Back Button */}
                <button
                    onClick={() => navigate("/profile")}
                    className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    ← Back to Profile
                </button>
            </div>

            {/* Cards Section */}
            <div className="p-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Consent Management */}
                    <div
                        onClick={() => navigate("/consent")}
                        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-600 mb-2">
                            Consent Management
                        </h2>
                        <p className="text-gray-600">
                            Manage your consent preferences and data sharing permissions.
                        </p>
                    </div>

                    {/* Data Access */}
                    <div
                        onClick={() => navigate("/data-access")}
                        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-600 mb-2">
                            Data Access
                        </h2>
                        <p className="text-gray-600">
                            View information stored about you.
                        </p>
                    </div>

                    {/* Data Deletion */}
                    <div
                        onClick={() => navigate("/data-deletion")}
                        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-600 mb-2">
                            Data Deletion
                        </h2>

                        <p className="text-gray-600">
                            Request deletion of your account data.
                        </p>
                    </div>

                    {/* Download Data */}
                    <div
                        onClick={() => navigate("/download-data")}
                        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-600 mb-2">
                            Download My Data
                        </h2>

                        <p className="text-gray-600">
                            Export your personal information.
                        </p>
                    </div>

                    {/* Privacy Settings */}
                    <div
                        onClick={() => navigate("/privacy-settings")}
                        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-600 mb-2">
                            Privacy Settings
                        </h2>

                        <p className="text-gray-600">
                            Control visibility and sharing options.
                        </p>
                    </div>

                    {/* Audit Logs */}
                    <div
                        onClick={() => navigate("/audit-logs")}
                        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-600 mb-2">
                            Audit Logs
                        </h2>

                        <p className="text-gray-600">
                            View privacy-related activities.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default PrivacyDashboard;