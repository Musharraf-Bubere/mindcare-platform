function EmergencySupport() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">

      <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl">

        <h1 className="text-4xl font-bold text-red-600 mb-4">
          🚨 Immediate Support Recommended
        </h1>

        <p className="text-lg mb-4">
          Your assessment indicates that you may need
          urgent professional assistance.
        </p>

        <div className="space-y-3">

          <div className="bg-red-100 p-4 rounded-lg">
            <strong>Emergency Number:</strong> 112
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <strong>Tele-MANAS:</strong> 14416
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <strong>Recommendation:</strong>
            Contact a licensed therapist or mental health
            professional immediately.
          </div>

        </div>

      </div>

    </div>
  );
}

export default EmergencySupport;