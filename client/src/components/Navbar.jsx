import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">HotelBooking</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
          </>
        ) : (
          <Link to="/auth">Login / Signup</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
