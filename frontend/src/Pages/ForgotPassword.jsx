import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[450px]">

        <h1 className="text-3xl font-bold mb-5">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-4"
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Send Reset Link
        </button>

        <Link
          to="/"
          className="block text-center mt-4 text-blue-600"
        >
          Back To Login
        </Link>

      </div>

    </div>
  );
}

export default ForgotPassword;