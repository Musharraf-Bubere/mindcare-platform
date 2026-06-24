import { useNavigate } from "react-router-dom";

function DownloadData() {
  const navigate = useNavigate();

  const handleDownload = () => {
    alert("Your data export is ready for download!");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-10">
        <h1 className="text-5xl font-bold mb-4">
          Download My Data
        </h1>

        <p className="text-lg">
          Export and download your personal information.
        </p>
      </div>

      {/* Download Card */}
      <div className="p-10">

        <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

          <h2 className="text-2xl font-bold mb-4">
            Data Export
          </h2>

          <p className="text-gray-600 mb-6">
            Download a copy of your account information,
            assessments, preferences and privacy settings.
          </p>

          <div className="flex gap-4">

            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download Data
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

export default DownloadData;