import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow">

      <h1
        className="font-bold text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        MindCare
      </h1>
<div className="flex items-center gap-4">

  <button
    onClick={() => navigate("/home")}
    className="bg-white text-blue-600 px-4 py-2 rounded-lg"
  >
    Home
  </button>

  <button
    onClick={() => navigate("/profile")}
    className="bg-white text-blue-600 px-4 py-2 rounded-lg"
  >
    Profile
  </button>

  <button
    onClick={() => navigate("/privacy")}
    className="bg-white text-blue-600 px-4 py-2 rounded-lg"
  >
    Privacy
  </button>

  <button
    onClick={() => navigate("/")}
    className="bg-red-500 text-white px-4 py-2 rounded-lg"
  >
    Logout
  </button>
  <Link
  to="/login"
  className="bg-red-500 px-3 py-2 rounded"
>
  Login
</Link>

</div>

    </div>
  );
}

export default Navbar;