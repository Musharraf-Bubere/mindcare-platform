import { useNavigate } from "react-router-dom";

function TherapistDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <div className="bg-white shadow p-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          Therapist Panel
        </h1>

        <div className="flex items-center gap-4">

          <span>Dr. Priya Sharma</span>

          <img
            src="https://i.pravatar.cc/50?img=12"
            alt="Profile"
            className="rounded-full"
          />

        </div>

      </div>

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-2">
          Welcome Doctor 👋
        </h1>

        <p className="text-gray-500 mb-8">
          Manage appointments and clients
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8 flex-wrap">

          <button
            onClick={() => navigate("/availability")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Manage Availability
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="bg-green-600 text-white px-5 py-3 rounded-lg"
          >
            My Profile
          </button>

          <button
            onClick={() => navigate("/therapist-assessment")}
            className="bg-orange-600 text-white px-5 py-3 rounded-lg"
          >
            Assessment Form
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Clients</p>

            <h1 className="text-5xl font-bold text-blue-600 mt-3">
              45
            </h1>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Appointments</p>

            <h1 className="text-5xl font-bold text-green-600 mt-3">
              18
            </h1>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Sessions</p>

            <h1 className="text-5xl font-bold text-purple-600 mt-3">
              120
            </h1>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Rating</p>

            <h1 className="text-5xl font-bold text-yellow-500 mt-3">
              4.9
            </h1>
          </div>

        </div>

        {/* Today's Appointments */}
        <div className="bg-white mt-10 p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-5">
            Today's Appointments
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Client</th>
                <th className="text-left p-3">Time</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Rahul Sharma</td>
                <td className="p-3">10:00 AM</td>
                <td className="p-3 text-green-600">
                  Confirmed
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Anjali Gupta</td>
                <td className="p-3">12:00 PM</td>
                <td className="p-3 text-yellow-500">
                  Pending
                </td>
              </tr>

              <tr>
                <td className="p-3">Vikas Singh</td>
                <td className="p-3">4:00 PM</td>
                <td className="p-3 text-green-600">
                  Confirmed
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
<div className="mt-5">
  <button
    onClick={() => navigate("/therapist-assessment")}
    className="bg-blue-600 text-white px-5 py-2 rounded"
  >
    Assessment
  </button>
</div>
    </div>
  );
}

export default TherapistDashboard;