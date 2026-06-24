function AvailabilityManagement() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Manage Availability
        </h1>

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label>Date</label>

            <input
              type="date"
              className="w-full border p-3 rounded mt-2"
            />

          </div>

          <div>

            <label>Time Slot</label>

            <input
              type="time"
              className="w-full border p-3 rounded mt-2"
            />

          </div>

        </div>

        <button
          className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Add Slot
        </button>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Available Slots
          </h2>

          <div className="space-y-3">

            <div className="bg-green-100 p-4 rounded">
              25 June 2026 - 10:00 AM
            </div>

            <div className="bg-green-100 p-4 rounded">
              25 June 2026 - 02:00 PM
            </div>

            <div className="bg-green-100 p-4 rounded">
              26 June 2026 - 11:00 AM
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AvailabilityManagement;