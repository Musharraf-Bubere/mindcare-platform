import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">

      <h2 className="text-xl mb-5 font-bold">
        Dashboard
      </h2>

      <ul className="space-y-3">

        <li>
          <Link to="/client-dashboard">
            Home
          </Link>
        </li>

        <li>
          <Link to="/assessment">
            Assessment
          </Link>
        </li>

        <li>
          <Link to="/recommendation">
            Therapists
          </Link>
        </li>

        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;