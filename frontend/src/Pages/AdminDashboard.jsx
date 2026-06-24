function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">
            Total Clients
          </h2>

          <h1 className="text-5xl font-bold text-blue-600 mt-3">
            120
          </h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">
            Total Therapists
          </h2>

          <h1 className="text-5xl font-bold text-green-600 mt-3">
            45
          </h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">
            Pending Approvals
          </h2>

          <h1 className="text-5xl font-bold text-red-600 mt-3">
            8
          </h1>
        </div>

      </div>

      <div className="bg-white mt-10 p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Therapist Approval Requests
        </h2>

        <table className="w-full">

          <thead>
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Specialization</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="p-3">Dr. Priya Sharma</td>
              <td className="p-3">Anxiety</td>
              <td className="p-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded">
                  Approve
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;