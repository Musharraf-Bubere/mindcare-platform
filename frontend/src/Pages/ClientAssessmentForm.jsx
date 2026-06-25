import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ClientAssessmentForm() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
  ageGroup: "",
  genderPreference: "",
  language: "",
  concern: "",
  severity: "",
  risk: "",
  therapyApproach: "",
  therapyMethod: "",
  availability: "",
  sessions: "",
  budget: "",
  goal: ""
});

const handleChange = (e) => {

  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });

  if (name === "risk" && value === "Severe") {
    alert(
      "⚠️ High Risk Detected!\n\nYou may require immediate professional support."
    );
  }
};

const handleSubmit = () => {

  console.log(formData);

  if (formData.risk === "Severe") {

    navigate("/emergency-support");

  } else {

    navigate("/recommendation");

  }
};



  return (
   <div className="min-h-screen bg-gray-100 p-10">

<h1 className="text-4xl font-bold mb-8 text-center">
Client Assessment Form
</h1>

<div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">

{/* Age Group */}

<label className="font-bold">
1. What is your age group?
</label>

<select
name="ageGroup"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Under 18</option>
<option>18-25</option>
<option>26-40</option>
<option>41-60</option>
<option>60+</option>
</select>

{/* Gender */}

<label className="font-bold">
2. Therapist Gender Preference
</label>

<select
name="genderPreference"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Male</option>
<option>Female</option>
<option>Non-Binary</option>
<option>No Preference</option>
</select>

{/* Language */}

<label className="font-bold">
3. Preferred Language
</label>

<select
name="language"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>English</option>
<option>Hindi</option>
<option>Other</option>
</select>

{/* Concern */}

<label className="font-bold">
4. Primary Concern
</label>

<select
name="concern"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Anxiety</option>
<option>Depression</option>
<option>Stress</option>
<option>Relationship Issues</option>
<option>Trauma</option>
<option>Other</option>
</select>

{/* Severity */}

<label className="font-bold">
5. Severity Level
</label>

<select
name="severity"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Mild</option>
<option>Moderate</option>
<option>Severe</option>
</select>

{/* Risk */}

<label className="font-bold">
6. Risk Assessment
</label>

<select
name="risk"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>None</option>
<option>Occasional</option>
<option>Frequent</option>
<option>Severe</option>

{
  formData.risk === "Severe" && (
    <div className="bg-red-100 border border-red-500 p-4 rounded-lg mb-4">
      <h3 className="text-red-700 font-bold text-lg">
        🚨 Immediate Attention Recommended
      </h3>

      <p className="text-red-600 mt-2">
        Based on your response, we strongly recommend
        contacting a mental health professional immediately.
      </p>

      <div className="mt-3">
        <p>
          📞 Emergency: 112
        </p>

        <p>
          ☎ Tele-MANAS Helpline: 14416
        </p>

        <p>
          🏥 Seek nearby professional support.
        </p>
      </div>
    </div>
  )
}

</select>

{/* Therapy Start */}

<label className="font-bold">
7. Therapy Timeline
</label>

<select
name="therapyApproach"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Immediately</option>
<option>Within 1 Week</option>
<option>Within 1 Month</option>
<option>Just Exploring</option>
</select>

{/* Method */}

<label className="font-bold">
8. Therapy Method
</label>

<select
name="therapyMethod"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>CBT</option>
<option>Psychodynamic</option>
<option>Humanistic</option>
<option>Integrative</option>
<option>No Preference</option>
</select>

{/* Availability */}

<label className="font-bold">
9. Availability
</label>

<select
name="availability"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
<option>Weekends</option>
</select>

{/* Sessions */}

<label className="font-bold">
10. Session Type
</label>

<select
name="sessions"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Online</option>
<option>Offline</option>
<option>Either</option>
<option>Not Sure</option>
</select>

{/* Budget */}

<label className="font-bold">
11. Budget Per Session
</label>

<select
name="budget"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>₹100-500</option>
<option>₹600-1000</option>
<option>₹1500-2000</option>
<option>₹2000+</option>
</select>

{/* Goal */}

<label className="font-bold">
12. Therapy Goal
</label>

<select
name="goal"
onChange={handleChange}
className="w-full border p-3 rounded mb-6"
>
<option value="">Select</option>
<option>Stress Reduction</option>
<option>Emotional Regulation</option>
<option>Relationship Improvement</option>
<option>Self Awareness</option>
<option>Trauma Recovery</option>
<option>Other</option>
</select>

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
