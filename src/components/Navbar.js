import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";

function Navbar() {
  const { user, logout } = useAuth(); 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg px-6 py-4 flex justify-between items-center transition-colors duration-300 ease-in-out">
      <h1 className="text-2xl font-extrabold text-pink-600 dark:text-pink-400">
        <Link to="/" className="flex items-center space-x-3 focus:outline-none">
          <img
            src="logo.jpg"
            alt="Student Portal Logo"
            className="h-12 w-auto"
          />
          <span className="sm:inline">Student Portal</span>
        </Link>
      </h1>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className={`text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 font-medium relative group transition-colors duration-200 ${
            isActiveLink("/") ? "text-pink-600 dark:text-pink-400" : ""
          }`}
        >
          Home
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-pink-600 dark:bg-pink-400 transition-transform duration-300 transform ${isActiveLink("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </Link>

        {user ? (
          <>
            <Link
              to="/Users"
              className={`text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 font-medium relative group transition-colors duration-200 ${
                isActiveLink("/Users") ? "text-pink-600 dark:text-pink-400" : ""
              }`}
            >
              Users
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-pink-600 dark:bg-pink-400 transition-transform duration-300 transform ${isActiveLink("/Users") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </Link>
            <Link
              to="/Dashboard"
              className={`text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 font-medium relative group transition-colors duration-200 ${
                isActiveLink("/Dashboard") ? "text-pink-600 dark:text-pink-400" : ""
              }`}
            >
              Dashboard
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-pink-600 dark:bg-pink-400 transition-transform duration-300 transform ${isActiveLink("/Dashboard") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </Link>
          </>
        ) : (
          <>
            <span
              className="text-gray-500 dark:text-gray-400 cursor-not-allowed font-medium relative group"
              title="Login to access Users"
            >
              Users
              <span className="absolute left-0 top-full mt-1 w-max px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Login to access information
              </span>
            </span>
            <span
              className="text-gray-500 dark:text-gray-400 cursor-not-allowed font-medium relative group"
              title="Login to access Dashboard"
            >
              Dashboard
              <span className="absolute left-0 top-full mt-1 w-max px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Login to access information
              </span>
            </span>
          </>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <span className="text-gray-700 dark:text-gray-200 font-medium hidden md:inline">
            Welcome, {'John Doe'}!
          </span>
        ) : (
          <Link
            to="/Login"
            className="px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            Login
          </Link>
        )}

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h1M3 12H2m15.325-4.675l.707-.707M6.675 17.325l-.707.707M17.325 17.325l.707.707M6.675 6.675l-.707-.707M12 18a6 6 0 100-12 6 6 0 000 12z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9 9 0 008.354-5.646z"
              ></path>
            </svg>
          )}
        </button>

        {user && ( 
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;