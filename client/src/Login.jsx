import axios  from 'axios';
import { useState } from "react";

const Login = async() => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    //axios.post /api/login

    try {
        await axios.post('/api/login', {
            email,
            password
        })
    }
    catch(err) {
        console.log(err.message);
        
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-2xl">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full h-100">
        <h1 className="text-xl  text-gray-800 mb-10">Login</h1>
        <form className="flex flex-col items-center justify-center space-y-5">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="px-4 py-2 border  border-purple-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 w-full"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
            className="px-4 py-2 border border-purple-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 w-full"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            id="SubmitButton"
            className="w-full py-3 mt-5 bg-purple-300 rounded-full font-semibold hover:!bg-purple-500 transition">
            Login
          </button>
        </form>
        <div className="mt-5">
          <p className="text-sm text-gray-600">
            forget your password?{" "}
            <a href="#" className="text-purple-500 hover:!underline">
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
