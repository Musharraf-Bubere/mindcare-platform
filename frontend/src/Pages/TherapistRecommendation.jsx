import { useEffect, useState } from "react";
import { getMatchingTherapists } from "../Services/matchingService";

function TherapistRecommendation() {

  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    loadRecommendations();
  }, []);

  const loadRecommendations = async () => {

    try {

      const assessment = JSON.parse(
        localStorage.getItem("assessment")
      );

      const response = await getMatchingTherapists(
        assessment
      );

      setTherapists(response.therapists);

    } catch (error) {

      console.error(error);
      alert("Unable to load therapist recommendations");

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Recommended Therapists
      </h1>

      {
        therapists.length === 0 ? (

          <div className="bg-white p-8 rounded-xl shadow text-center">

            <h2 className="text-2xl font-bold">
              No Matching Therapist Found
            </h2>

            <p className="text-gray-500 mt-2">
              Please modify your assessment preferences.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-6">

            {therapists.map((t) => (

              <div
                key={t.therapist_id}
                className="bg-white p-6 rounded-xl shadow-lg"
              >

                <h2 className="text-2xl font-bold">
                  {t.full_name}
                </h2>

                <p className="text-blue-600 mt-2">
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
                  <strong>Fee:</strong> {t.fee_range}
                </p>

                <p className="mt-2 text-green-600 font-bold">
                  Match Score: {t.score}
                </p>

                <button
                  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  Book Session
                </button>

              </div>

            ))}

          </div>

        )
      }

    </div>

  );
}

export default TherapistRecommendation;