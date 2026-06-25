import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getQuestions,
  submitAssessment
} from "../Services/assessmentService";


function ClientAssessmentForm() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {

    try {

      const response = await getQuestions();

      setQuestions(response.questions);

      console.log(response.questions);

    } catch (error) {

      console.error(error);

      alert("Failed to load questions");

    }

  };

  const handleChange = (
    questionId,
    option,
    selectionType
  ) => {

    if (selectionType === "single") {

      setFormData((prev) => ({
        ...prev,
        [questionId]: option
      }));

      if (
        (questionId === 5 || questionId === 6) &&
        option === "Severe"
      ) {
        alert(
          "⚠️ High Risk Detected!\n\nYou may require immediate professional support."
        );
      }

    } else {

      setFormData((prev) => {

        const current = prev[questionId] || [];

        if (current.includes(option)) {

          return {
            ...prev,
            [questionId]: current.filter(
              (item) => item !== option
            )
          };

        } else {

          return {
            ...prev,
            [questionId]: [
              ...current,
              option
            ]
          };

        }

      });

    }

  };

  const handleSubmit = async () => {

    try {

      const response = await submitAssessment(formData);

      alert(response.message);

      localStorage.setItem(
        "assessment",
        JSON.stringify(formData)
      );

      if (formData[6]?.includes("Severe")) {

        navigate("/emergency-support");

      } else {

        navigate("/recommendation");

      }

    } catch (error) {

      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Failed to submit assessment");
      }

    }

  };



  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Client Assessment Form
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">

        {questions.map((question) => (

          <div
            key={question.id}
            className="mb-8 border rounded-lg p-5"
          >

            <h3 className="font-bold text-lg mb-4">
              {question.question_number}. {question.question_text}
            </h3>

            {/* Single Selection */}

            {question.selection_type === "single" && (

              <div className="space-y-2">

                {question.options.map((option) => (

                  <label
                    key={option.id}
                    className="flex items-center gap-3"
                  >

                    <input
                      type="radio"
                      name={`question_${question.id}`}
                      value={option.text}
                      checked={formData[question.id] === option.text}
                      onChange={() =>
                        handleChange(
                          question.id,
                          option.text,
                          "single"
                        )
                      }
                    />

                    {option.text}

                  </label>

                ))}

              </div>

            )}

            {/* Multiple Selection */}

            {question.selection_type === "multi" && (

              <div className="space-y-2">

                {question.options.map((option) => (

                  <label
                    key={option.id}
                    className="flex items-center gap-3"
                  >

                    <input
                      type="checkbox"
                      checked={
                        formData[question.id]?.includes(option.text) || false
                      }
                      onChange={() =>
                        handleChange(
                          question.id,
                          option.text,
                          "multi"
                        )
                      }
                    />

                    {option.text}

                  </label>

                ))}

              </div>

            )}

            {/* Emergency Alert */}

            {question.id === 6 &&
              formData[6]?.includes("Severe") && (

                <div className="bg-red-100 border border-red-500 p-4 rounded-lg mt-5">

                  <h3 className="font-bold text-red-700">
                    🚨 Immediate Attention Recommended
                  </h3>

                  <p className="text-red-600 mt-2">
                    Based on your responses,
                    we strongly recommend
                    contacting a mental health professional immediately.
                  </p>

                  <div className="mt-3">

                    <p>📞 Emergency : 112</p>

                    <p>☎ Tele-MANAS : 14416</p>

                    <p>🏥 Visit your nearest hospital.</p>

                  </div>

                </div>

              )}

          </div>

        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Submit Assessment
        </button>

      </div>

    </div>
  );
}

export default ClientAssessmentForm;
