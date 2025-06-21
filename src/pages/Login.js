import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 sm:p-10
                    bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out">
      <form
        onSubmit={handleSubmit}
        className="
          bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl space-y-6 w-full max-w-sm
          transform hover:scale-[1.01] transition-all duration-300 ease-in-out
          border border-gray-200 dark:border-gray-700
        "
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">
          Login
        </h2>

        <div>
          <label htmlFor="email" className="sr-only">Email</label> 
          <input
            type="email"
            id="email" 
            placeholder="Email address"
            className="
              w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg
              bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-400
              focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
              transition-all duration-200 ease-in-out
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            autoComplete="email" 
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">Password</label> 
          <input
            type="password"
            id="password" 
            placeholder="Password"
            className="
              w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg
              bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-400
              focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
              transition-all duration-200 ease-in-out
            "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            autoComplete="current-password" 
          />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
          New user?{' '}
          <Link
            to="/Signup"
            className="
              text-pink-600 dark:text-pink-400 font-semibold hover:underline
               focus:text-pink-700 dark:focus:text-pink-400 focus:after:absolute focus:after:bottom-[-4px] focus:after:left-0 focus:after:w-full focus:after:h-[2px] focus:after:bg-pink-600 dark:focus:after:bg-pink-400 focus:after:rounded-full focus:after:transition-all focus:after:duration-300
              focus:outline-none
            "
          >
            Sign up
          </Link>
        </p>

        <button
          type="submit"
          className="
            w-full px-5 py-3 rounded-lg font-bold text-white
            bg-pink-600 hover:bg-pink-700
            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900
            transition-all duration-200 ease-in-out shadow-md hover:shadow-lg
          "
        >
          Login
        </button>
      </form>
    </div>
  );
}