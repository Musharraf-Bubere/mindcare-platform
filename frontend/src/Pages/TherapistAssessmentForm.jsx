import { useState } from "react";

function TherapistAssessmentForm() {

const [formData, setFormData] = useState({
  ageGroup: "",
  gender: "",
  language: "",
  specialization: "",
  severity: "",
  riskHandling: "",
  availabilityStart: "",
  therapyApproach: "",
  availability: "",
  sessionType: "",
  fee: "",
  clientGoal: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = () => {
  console.log(formData);
  alert("Therapist Assessment Submitted");
};

return (
<div className="min-h-screen bg-gray-100 p-10">

<h1 className="text-4xl font-bold text-center mb-8">
Therapist Assessment Form
</h1>

<div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">

{/* Age Group */}

<label className="font-bold">
1. Which client age groups do you work with?
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
2. Gender Identity
</label>

<select
name="gender"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Male</option>
<option>Female</option>
<option>Non-Binary</option>
<option>Prefer not to say</option>
</select>

{/* Language */}

<label className="font-bold">
3. Languages Provided
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

{/* Specialization */}

<label className="font-bold">
4. Areas of Specialization
</label>

<select
name="specialization"
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
5. Comfortable Severity Level
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
6. High Risk Client Handling
</label>

<select
name="riskHandling"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>No</option>
<option>Mild</option>
<option>Moderate</option>
<option>Severe</option>
</select>

{/* Availability Start */}

<label className="font-bold">
7. When can you start with new clients?
</label>

<select
name="availabilityStart"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Immediately</option>
<option>Within 1 Week</option>
<option>Within 1 Month</option>
<option>Flexible</option>
</select>

{/* Therapy Approach */}

<label className="font-bold">
8. Therapy Approaches Used
</label>

<select
name="therapyApproach"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>CBT</option>
<option>Psychodynamic</option>
<option>Humanistic</option>
<option>Integrative</option>
</select>

{/* Availability */}

<label className="font-bold">
9. Session Availability
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

{/* Session Type */}

<label className="font-bold">
10. Session Type
</label>

<select
name="sessionType"
onChange={handleChange}
className="w-full border p-3 rounded mb-4"
>
<option value="">Select</option>
<option>Online</option>
<option>In-Person</option>
<option>Hybrid</option>
</select>

{/* Fee */}

<label className="font-bold">
11. Fee Per Session
</label>

<select
name="fee"
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
12. Common Client Goals
</label>

<select
name="clientGoal"
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
className="w-full bg-green-600 text-white py-3 rounded-lg"
>
Submit Assessment
</button>

</div>

</div>
);
}

export default TherapistAssessmentForm;