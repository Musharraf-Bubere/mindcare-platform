import { useNavigate } from "react-router-dom";
import {
  getUserData,
  logDataDownload
} from "../Services/privacyService";

function DownloadData() {

  const navigate = useNavigate();

  const handleDownload = async () => {

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first.");
        return;
      }

      // Fetch complete user data
      const response = await getUserData(user.id);

      // Prepare export object
      const exportData = {
        exported_at: new Date().toLocaleString(),
        data: response.data
      };

      // Convert to JSON
      const json = JSON.stringify(exportData, null, 2);

      // Create downloadable file
      const blob = new Blob(
        [json],
        {
          type: "application/json"
        }
      );

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = `mindcare-data-${user.id}.json`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      // Save audit log
      await logDataDownload(user.id);

      alert("Your data has been downloaded successfully!");

    } catch (error) {

      console.error(error);

      alert("Unable to download your data.");

    }

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
            assessment responses and privacy preferences.
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