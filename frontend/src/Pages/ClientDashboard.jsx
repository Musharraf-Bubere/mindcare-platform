// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";



function ClientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          MindCare
        </h1>

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/profile")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            My Profile
          </button>

          <img
            src="https://i.pravatar.cc/50"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>

      <div className="p-8">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Here's your mental wellness overview
        </p>

        {/* Action Buttons */}

        <div className="flex gap-4 mb-10">

        <button
  onClick={() => navigate("/client-assessment")}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
  Take Assessment
</button>

          <button
            onClick={() => navigate("/recommendation")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            View Recommendations
          </button>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">
              Mood Score
            </h2>

            <h1 className="text-5xl font-bold text-green-600 mt-3">
              85%
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">
              Assessments
            </h2>

{/* Mental Health Safety Notice */}

<div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg mb-8">
  <h2 className="text-xl font-bold text-red-700 mb-2">
    🚨 Need Immediate Support?
  </h2>

  <p className="text-gray-700 mb-3">
    If you are experiencing severe distress, self-harm thoughts,
    or feel unsafe, please seek immediate professional help.
  </p>

  <div className="grid md:grid-cols-3 gap-3">

    <div className="bg-white p-3 rounded shadow">
      <h3 className="font-bold text-red-600">
        Emergency
      </h3>
      <p>Call 112</p>
    </div>

    <div className="bg-white p-3 rounded shadow">
      <h3 className="font-bold text-red-600">
        Mental Health Helpline
      </h3>
      <p>Tele-MANAS: 14416</p>
    </div>

    <div className="bg-white p-3 rounded shadow">
      <h3 className="font-bold text-red-600">
        Crisis Support
      </h3>
      <p>Available 24×7</p>
    </div>

  </div>
</div>

            <h1 className="text-5xl font-bold text-blue-600 mt-3">
              12
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">
              Sessions
            </h2>

            <h1 className="text-5xl font-bold text-purple-600 mt-3">
              6
            </h1>
          </div>

        </div>

        {/* Recommended Therapists */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Recommended Therapists
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-5 rounded-xl shadow">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt=""
                className="rounded-full w-20 h-20"
              />

              <h3 className="font-bold text-xl mt-3">
                Dr. Priya Sharma
              </h3>

              <p>Anxiety Specialist</p>

              <p className="text-green-600 font-bold mt-2">
                Match Score: 95%
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded mt-4">
                View Profile
              </button>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <img
                src="https://i.pravatar.cc/150?img=20"
                alt=""
                className="rounded-full w-20 h-20"
              />

              <h3 className="font-bold text-xl mt-3">
                Dr. Aman Gupta
              </h3>

              <p>Depression Expert</p>

              <p className="text-green-600 font-bold mt-2">
                Match Score: 91%
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded mt-4">
                View Profile
              </button>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <img
                src="https://i.pravatar.cc/150?img=25"
                alt=""
                className="rounded-full w-20 h-20"
              />

              <h3 className="font-bold text-xl mt-3">
                Dr. Sarah Khan
              </h3>

              <p>Stress Management</p>

              <p className="text-green-600 font-bold mt-2">
                Match Score: 88%
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded mt-4">
                View Profile
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ClientDashboard;