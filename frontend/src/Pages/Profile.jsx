import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  updateProfile
} from "../Services/profileService";
import LogoutButton from "../Components/LogoutButton";

function Profile() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  const [profilePic, setProfilePic] = useState(
    "https://i.pravatar.cc/200"
  );

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    try {

      const response = await getProfile();

      const user = response.user;

      setName(user.full_name);
      setEmail(user.email);
      setPhone(user.phone);
      setAge(user.age);
      setRole(user.role);

    } catch (error) {

      console.error(error);
      alert("Unable to load profile");

    }

  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }

  };

  const handleUpdate = async () => {

    try {

      const response = await updateProfile({
        full_name: name,
        email,
        phone,
        age
      });

      alert(response.message);

      loadProfile();

    } catch (error) {

      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to update profile");
      }

    }

  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <div className="flex items-center gap-8">

          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />

          <div>

            <h1 className="text-3xl font-bold">
              {name}
            </h1>

            <p className="text-gray-500 capitalize">
              {role} Account
            </p>

            <p className="text-blue-600 font-medium mt-2">
              Privacy & Data Controls Available
            </p>

            <input
              type="file"
              onChange={handleImageChange}
              className="mt-3"
            />

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 rounded"
          />

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-3 rounded"
          />

        </div>

        <div className="mt-6 flex gap-4">

          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Update Profile
          </button>

          <button
            onClick={() => navigate("/privacy")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Privacy Dashboard
          </button>

          <LogoutButton />

        </div>

      </div>

    </div>
  );
}

export default Profile;