import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (role === "client") {
      navigate("/client-dashboard");
    } else if (role === "therapist") {
      navigate("/therapist-dashboard");
    } else {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex">

      <div className="w-1/2 bg-blue-700 text-white flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold">
            Mental Health Platform
          </h1>

          <p className="mt-4">
            Find Your Perfect Therapist
          </p>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">

        <div className="bg-white p-8 shadow-xl rounded-xl w-[450px]">

          <h1 className="text-3xl font-bold mb-5">
            Login
          </h1>

          <div className="flex gap-5 mb-5">

            <label>
              <input
                type="radio"
                value="client"
                checked={role === "client"}
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="ml-2">Client</span>
            </label>

            <label>
              <input
                type="radio"
                value="therapist"
                checked={role === "therapist"}
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="ml-2">Therapist</span>
            </label>

            <label>
              <input
                type="radio"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="ml-2">Admin</span>
            </label>

          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded mb-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded mb-3"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Login
          </button>

          <div className="flex justify-between mt-4">

            <Link to="/signup">
              Signup
            </Link>

            <Link to="/forgot">
              Forgot Password
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;