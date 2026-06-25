import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../Services/privacyService";

function DataAccess() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const user = JSON.parse(localStorage.getItem("user"));

                const response = await getUserData(user.id);

                setData(response.data);

            } catch (err) {

                console.log(err);
                alert("Failed to load user data.");

            } finally {

                setLoading(false);

            }

        };

        fetchData();

    }, []);

    const handleDownload = () => {

        const json = JSON.stringify(data, null, 2);

        const blob = new Blob([json], {
            type: "application/json"
        });

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "mindcare_data.json";

        link.click();

        window.URL.revokeObjectURL(url);

    };

    if (loading) {

        return (
            <div className="p-20 text-center text-2xl">
                Loading...
            </div>
        );

    }

    return (

        <div className="min-h-screen bg-gray-100">

            {/* Hero */}

            <div className="bg-blue-600 text-white py-16 px-10">

                <h1 className="text-5xl font-bold mb-3">
                    My Personal Data
                </h1>

                <p>
                    Everything MindCare currently stores about your account.
                </p>

            </div>

            <div className="max-w-6xl mx-auto p-10">

                {/* Profile */}

                <div className="bg-white rounded-xl shadow p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-6">
                        👤 Profile Information
                    </h2>

                    <div className="grid grid-cols-2 gap-4">

                        <p><strong>Name:</strong> {data.profile.full_name}</p>

                        <p><strong>Email:</strong> {data.profile.email}</p>

                        <p><strong>Phone:</strong> {data.profile.phone}</p>

                        <p><strong>Role:</strong> {data.profile.role}</p>

                        <p><strong>Gender:</strong> {data.profile.gender}</p>

                        <p><strong>Age:</strong> {data.profile.age}</p>

                    </div>

                </div>

                {/* Privacy */}

                <div className="bg-white rounded-xl shadow p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-6">
                        🔒 Privacy Preferences
                    </h2>

                    {data.privacy ? (

                        <div className="space-y-3">

                            <p>

                                Therapist Access :
                                <strong className="ml-2">

                                    {data.privacy.therapist_access
                                        ? "Enabled"
                                        : "Disabled"}

                                </strong>

                            </p>

                            <p>

                                Research Usage :
                                <strong className="ml-2">

                                    {data.privacy.research_usage
                                        ? "Enabled"
                                        : "Disabled"}

                                </strong>

                            </p>

                            <p>

                                Email Notifications :
                                <strong className="ml-2">

                                    {data.privacy.email_notifications
                                        ? "Enabled"
                                        : "Disabled"}

                                </strong>

                            </p>

                        </div>

                    ) : (

                        <p>No privacy settings found.</p>

                    )}

                </div>

                {/* Assessment */}

                <div className="bg-white rounded-xl shadow p-8">

                    <h2 className="text-3xl font-bold mb-6">
                        📝 Assessment Responses
                    </h2>

                    {data.assessment.length === 0 ? (

                        <p>No assessment submitted.</p>

                    ) : (

                        <table className="w-full border">

                            <thead className="bg-gray-200">

                                <tr>

                                    <th className="border p-3 text-left">
                                        Question
                                    </th>

                                    <th className="border p-3 text-left">
                                        Your Answer
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {data.assessment.map((item, index) => (

                                    <tr key={index}>

                                        <td className="border p-3">
                                            {item.question_text}
                                        </td>

                                        <td className="border p-3">
                                            {item.selected_option}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    )}

                </div>

                <div className="flex gap-5 mt-8">

                    <button
                        onClick={handleDownload}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Download My Data
                    </button>

                    <button
                        onClick={() => navigate("/privacy")}
                        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
                    >
                        Back
                    </button>

                </div>

            </div>

        </div>

    );

}

export default DataAccess;