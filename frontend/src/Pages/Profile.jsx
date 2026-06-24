import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [name, setName] = useState("Karan Shaw");
  const [email, setEmail] = useState("karan@gmail.com");
  const [phone, setPhone] = useState("9876543210");
  const [age, setAge] = useState("22");

  const [profilePic, setProfilePic] = useState(
    "https://i.pravatar.cc/200"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleUpdate = () => {
    alert("Profile Updated Successfully");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <div className="flex items-center gap-8">

          <img
            src={profilePic}
            alt=""
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />

          <div>
            <h1 className="text-3xl font-bold">
              {name}
            </h1>

            <p className="text-gray-500">
              Client Account
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

        </div>

      </div>

    </div>
  );
}

export default Profile;