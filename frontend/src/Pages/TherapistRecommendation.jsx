import { useEffect, useState } from "react";
import { getTherapists } from "../Services/therapistService";

function TherapistRecommendation() {

  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    loadTherapists();
  }, []);

  const loadTherapists = async () => {
    try {

      const response = await getTherapists();

      setTherapists(response.therapists);

    } catch (error) {
      console.error(error);
      alert("Unable to load therapists");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Recommended Therapists
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {therapists.map((t) => (

          <div
            key={t.id}
            className="bg-white p-6 rounded-xl shadow-lg"
          >

            <h2 className="text-2xl font-bold">
              {t.full_name}
            </h2>

            <p className="text-gray-600 mt-2">
              {t.specialization}
            </p>

            <p className="mt-2">
              <strong>Experience:</strong> {t.experience} Years
            </p>

            <p className="mt-2">
              <strong>Languages:</strong> {t.languages}
            </p>

            <p className="mt-2">
              <strong>Session:</strong> {t.session_mode}
            </p>

            <p className="mt-2">
              <strong>Fee:</strong> ₹{t.fee_range}
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