import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function DataDeletion() {

    const navigate = useNavigate();

    const [confirmText, setConfirmText] = useState("");

    const handleDelete = async () => {

        if (confirmText !== "DELETE") {

            alert("Please type DELETE to continue.");

            return;

        }

        const user = JSON.parse(localStorage.getItem("user"));

        try {

            const response = await api.delete(
                `/privacy/delete/${user.id}`
            );

            alert(response.data.message);

            localStorage.clear();

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Unable to delete account.");

        }

    };

    return (

        <div className="min-h-screen bg-gray-100">

            {/* Hero */}

            <div className="bg-red-600 text-white py-16 px-10">

                <h1 className="text-5xl font-bold">
                    Delete My Account
                </h1>

                <p className="mt-4 text-lg">
                    This action is permanent and cannot be undone.
                </p>

            </div>

            <div className="max-w-4xl mx-auto mt-10">

                <div className="bg-white rounded-xl shadow-lg p-8">

                    <h2 className="text-3xl font-bold mb-5">

                        ⚠ Warning

                    </h2>

                    <p className="mb-5">

                        Deleting your account will permanently remove:

                    </p>

                    <ul className="list-disc ml-8 space-y-2">

                        <li>Your Profile</li>

                        <li>Assessment History</li>

                        <li>Privacy Settings</li>

                        <li>Therapist Recommendations</li>

                        <li>All Personal Information</li>

                    </ul>

                    <div className="mt-8">

                        <label className="font-bold">

                            Type <span className="text-red-600">DELETE</span> to confirm

                        </label>

                        <input
                            value={confirmText}
                            onChange={(e) =>
                                setConfirmText(e.target.value)
                            }
                            className="border w-full mt-3 p-3 rounded-lg"
                        />

                    </div>

                    <div className="flex gap-5 mt-8">

                        <button
                            onClick={handleDelete}
                            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700"
                        >
                            Delete My Account
                        </button>

                        <button
                            onClick={() => navigate("/privacy")}
                            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700"
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DataDeletion;