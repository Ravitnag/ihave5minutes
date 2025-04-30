import { useState } from "react";
import axios  from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, username);

    //axios.post /api/login

    try {
      await axios.post("/api/signup", {
        email,
        password,
        username
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-2xl">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full h-100">
        <h1 className="text-xl  text-gray-800 mb-6">Sign Up</h1>
        <form className="flex flex-col items-center justify-center space-y-5">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
            className="px-4 py-2 border  border-purple-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 w-full"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="px-4 py-2 border  border-purple-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 w-full"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-purple-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 w-full"
          />
          <button
            id="SubmitButton"
            onClick={(e) => handleSubmit(e)}
            className="w-full py-3 my-5 bg-purple-300 rounded-full font-semibold hover:!bg-purple-500 transition">
            Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
