import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/userService";



function Signup() {

  const navigate = useNavigate();

  const [role, setRole] = useState("client");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    if (!password.trim()) {
      alert("Password is required");
      return;
    }

    if (role === "client") {

      if (!phone.trim()) {
        alert("Phone Number is required");
        return;
      }

      if (!gender) {
        alert("Gender is required");
        return;
      }

      if (!age) {
        alert("Age is required");
        return;
      }
    }

    if (role === "therapist") {

      if (!phone.trim()) {
        alert("Phone Number is required");
        return;
      }

      if (!experience) {
        alert("Experience is required");
        return;
      }

      if (!specialization.trim()) {
        alert("Specialization is required");
        return;
      }
    }

    const userData = {
      name,
      email,
      phone,
      gender,
      age,
      experience,
      specialization,
      password,
      role
    };

    console.log(userData);

    try {

      await registerUser(userData);

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="w-[450px] bg-white shadow-xl p-8 rounded-xl">

        <h1 className="text-3xl font-bold mb-5">
          Create Account
        </h1>

        <p className="text-red-500 mb-3">
          Current Role: {role}
        </p>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

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

        <select
          className="w-full border p-3 rounded mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="client">Client</option>
          <option value="therapist">Therapist</option>
        </select>

        {role === "client" && (
          <>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded mb-3"
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border p-3 rounded mb-3"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border p-3 rounded mb-3"
            />
          </>
        )}

        {role === "therapist" && (
          <>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded mb-3"
            />

            <input
              type="number"
              placeholder="Experience (Years)"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border p-3 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full border p-3 rounded mb-3"
            />
          </>
        )}

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Register
        </button>

        <p className="mt-4 text-center">

          Already have account?

          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;