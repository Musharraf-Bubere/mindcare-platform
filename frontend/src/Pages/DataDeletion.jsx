import { useNavigate } from "react-router-dom";

function DataDeletion() {
  const navigate = useNavigate();

  const handleDelete = () => {
    alert("Account deletion request submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-10">
        <h1 className="text-5xl font-bold mb-4">
          Data Deletion
        </h1>

        <p className="text-lg">
          Request permanent deletion of your account and personal data.
        </p>
      </div>

      {/* Deletion Card */}
      <div className="p-10">

        <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Delete Account
          </h2>

          <p className="text-gray-600 mb-6">
            Warning: This action is permanent and cannot be undone.
            All your personal information, assessments, and account
            data will be removed.
          </p>

          <label className="block font-semibold mb-2">
            Reason for deletion
          </label>

          <textarea
            rows="5"
            placeholder="Enter your reason..."
            className="w-full border rounded-lg p-3 mb-6"
          ></textarea>

          <div className="flex gap-4">

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Delete My Account
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

export default DataDeletion;