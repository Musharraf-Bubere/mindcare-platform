import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuditLogs } from "../Services/auditService";

function AuditLogs() {

    const navigate = useNavigate();

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchLogs = async () => {

            try {

                const user = JSON.parse(
                    localStorage.getItem("user")
                );

                const response = await getAuditLogs(user.id);

                setLogs(response.logs);

            } catch (error) {

                console.log(error);

                alert("Unable to load audit logs.");

            } finally {

                setLoading(false);

            }

        };

        fetchLogs();

    }, []);

    if (loading) {

        return (
            <div className="min-h-screen flex justify-center items-center text-2xl">
                Loading Audit Logs...
            </div>
        );

    }

    return (

        <div className="min-h-screen bg-gray-100">

            {/* Hero */}

            <div className="bg-blue-600 text-white py-16 px-10">

                <h1 className="text-5xl font-bold">

                    Privacy Audit Logs

                </h1>

                <p className="mt-3 text-lg">

                    View all important privacy-related activities
                    performed in your account.

                </p>

            </div>

            <div className="max-w-5xl mx-auto py-10">

                {

                    logs.length === 0 ?

                    (

                        <div className="bg-white p-8 rounded-xl shadow text-center">

                            <h2 className="text-2xl">

                                No Activity Found

                            </h2>

                        </div>

                    )

                    :

                    (

                        logs.map((log) => (

                            <div
                                key={log.id}
                                className="bg-white shadow rounded-xl p-6 mb-5"
                            >

                                <div className="flex justify-between">

                                    <div>

                                        <h2 className="text-xl font-bold text-green-600">

                                            ✔ {log.activity}

                                        </h2>

                                    </div>

                                    <div className="text-gray-500">

                                        {

                                            new Date(
                                                log.created_at
                                            ).toLocaleString()

                                        }

                                    </div>

                                </div>

                            </div>

                        ))

                    )

                }

                <button

                    onClick={() => navigate("/privacy")}

                    className="mt-5 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"

                >

                    Back

                </button>

            </div>

        </div>

    );

}

export default AuditLogs;