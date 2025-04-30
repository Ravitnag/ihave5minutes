import { useNavigate } from "react-router-dom";

const UnLoggedIn = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target.id === "signUpButton") {
      navigate("/signup");  // כאן בלי רפרוש
    } else if (e.target.id === "logInButton") {
      navigate("/login");   // גם כאן
    }
  };
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center w-2xl">
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full h-100">
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            Welcome to <div className="text-purple-600 block text-4xl my-5 ">#IHave5Minutes</div>
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            {"Let's get you started. Sign up or log in to track your goals and make every minute count!"}
          </p>
         
          <div className="flex flex-col space-y-4">
            <button id="signUpButton" onClick={(e)=> handleClick(e)} className="w-full py-3 bg-purple-300 rounded-full font-semibold hover:!bg-purple-500 transition">
              Sign Up
            </button>
            <button  id="logInButton" onClick={(e)=> handleClick(e)} className="w-full py-3  bg-purple-300 rounded-full font-semibold hover:!bg-purple-500 transition">
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default UnLoggedIn;
  