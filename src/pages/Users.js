import { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa'; 

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to load users. Please try again later.");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out p-6 pt-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-500 dark:border-pink-400"></div>
        <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out p-6 pt-20">
        <p className="text-xl font-semibold text-red-600 dark:text-red-400">
          Oops! {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
        >
          Reload Page
        </button>
      </div>
    );
  }

  if (users.length === 0 && !loading && !error) {
    return (
      <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out p-6 pt-20">
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
          No users found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out p-6 sm:p-10 pt-20">
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Find our users 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {users.map(user => (
          <div
            key={user.id}
            className="
              bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg
              flex flex-col items-start text-left space-y-3 
              transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out
              border border-gray-200 dark:border-gray-700
            "
          >
            <FaUserCircle className="text-pink-500 text-5xl mb-3" />

            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {user.name}
            </h3>

            <p className="text-md text-gray-700 dark:text-gray-300 flex items-center space-x-2">
              <FaEnvelope className="text-pink-400" />
              <span>{user.email}</span>
            </p>

            <p className="text-md text-gray-700 dark:text-gray-300 flex items-center space-x-2">
              <FaPhone className="text-pink-400" />
              <span>{user.phone}</span>
            </p>

            <a
              href={`https://${user.website}`}
              className="text-pink-600 dark:text-pink-400 underline hover:no-underline flex items-center space-x-2 mt-2
                          focus:text-pink-700 dark:focus:text-pink-400 focus:after:absolute focus:after:bottom-[-4px] focus:after:left-0 focus:after:w-full focus:after:h-[2px] focus:after:bg-pink-600 dark:focus:after:bg-pink-400 focus:after:rounded-full focus:after:transition-all focus:after:duration-300
              focus:outline-none"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGlobe className="text-pink-500" />
              <span>{user.website}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}