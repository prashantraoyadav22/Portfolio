import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();

    // Placeholder for actual authentication logic
    if (email === "prashant.portfolio@gmail.com" && password === "Portfolio@123") {
      localStorage.setItem("auth", "true");
      window.location.href = "/Dashboard"; // Redirect to the dashboard or admin page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    
    <div
      className="min-h-screen flex items-center justify-center bg-black bg-cover bg-center"
      style={{
        backgroundImage: "url('../../public/image/bg.jpg')", // Ensure this image exists in your public/images directory
      }}
    >
      <div className="rounded p-8 rounded-xl shadow shadow-3xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-2xl bg-black/20 shadow shadow-2xl text-white focus:outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-2xl bg-black/20 shadow shadow-2xl text-white focus:outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link
            to="/Dashboard"
            className=" text-center w-full bg-blue-600/70 hover:bg-blue-700 text-white py-3 rounded transition duration-300"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
