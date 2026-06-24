import { useNavigate } from "react-router-dom";

function DataAccess() {
  const navigate = useNavigate();

  const handleDownload = () => {
    alert("Your data download has been prepared!");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-10">
        <h1 className="text-5xl font-bold mb-4">
          Data Access
        </h1>

        <p className="text-lg">
          View the personal information stored in your account.
        </p>
      </div>

      {/* Data Card */}
      <div className="p-10">

        <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Account Information
          </h2>

          <div className="space-y-4">

            <p>
              <strong>Name:</strong> John Doe
            </p>

            <p>
              <strong>Email:</strong> johndoe@email.com
            </p>

            <p>
              <strong>Role:</strong> Client
            </p>

            <p>
              <strong>Phone:</strong> +91 9876543210
            </p>

            <p>
              <strong>Gender:</strong> Male
            </p>

            <p>
              <strong>Age:</strong> 25
            </p>

          </div>

          <div className="flex gap-4 mt-8">

            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download My Data
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

export default DataAccess;