function TherapistRecommendation() {

  const therapists = [
    {
      name: "Dr. Priya Sharma",
      specialization: "Anxiety Specialist",
      rating: "4.9"
    },
    {
      name: "Dr. Aman Verma",
      specialization: "Stress Management",
      rating: "4.8"
    },
    {
      name: "Dr. Neha Gupta",
      specialization: "Depression Counselling",
      rating: "4.7"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Recommended Therapists
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {therapists.map((t, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg"
          >

            <h2 className="text-2xl font-bold">
              {t.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {t.specialization}
            </p>

            <p className="text-yellow-500 mt-2">
              ⭐ {t.rating}
            </p>

            <button
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Book Session
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TherapistRecommendation;