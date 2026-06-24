import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TherapistRegistration() {

  const navigate = useNavigate();
  const therapist = JSON.parse(
  localStorage.getItem("therapistData")
);

  const [therapist, setTherapist] = useState({
    name: "",
    email: "",
    specialization: "",
    experience: "",
    fee: "",
    phone: "",
    bio: ""
  });

  const handleChange = (e) => {
    setTherapist({
      ...therapist,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    localStorage.setItem(
      "therapistData",
      JSON.stringify(therapist)
    );

    alert("Therapist Registration Successful!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="w-[700px] bg-white p-8 rounded-xl shadow-xl">

        <h1 className="text-3xl font-bold mb-6">
          Therapist Registration
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Full Name"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="specialization"
            placeholder="Specialization"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="experience"
            placeholder="Experience (Years)"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="fee"
            placeholder="Consultation Fee"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="border p-3 rounded"
            onChange={handleChange}
          />

        </div>

        <textarea
          name="bio"
          rows="4"
          placeholder="Professional Bio"
          className="w-full border p-3 rounded mt-4"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-3 rounded-lg mt-5"
        >
          Submit Application
        </button>

      </div>

    </div>
  );
}

export default TherapistRegistration;