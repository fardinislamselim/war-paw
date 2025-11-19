import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import defaultAvatar from "../assets/image.png";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(toast.success("Logout successful!"))
      .catch((error) => toast.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="font-medium">
          Services
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile" className="font-medium">
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="navbar container px-2 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="cursor-pointer flex items-center">
            <img className="h-12" src={logo} alt="Logo" />
            <h3 className="text-2xl font-bold text-secondary ml-1 hidden sm:block">
              Warm - Paws
            </h3>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end space-x-3">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || "User"}
              >
                <img
                  src={user.photoURL || defaultAvatar}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
                />
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-outline text-white btn-primary font-semibold rounded-full px-5"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary text-white font-heading text-lg rounded-full px-6 shadow hover:scale-105 transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
