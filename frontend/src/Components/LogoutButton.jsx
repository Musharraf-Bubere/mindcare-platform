import { useNavigate } from "react-router-dom";

function LogoutButton() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");

  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
    >
      Logout
    </button>
  );
}

export default LogoutButton;