import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnLoggedIn from "./UnLoggedIn";
import SignUp from "./SignUp";
import Login from "./Login";
import "./App.css";
import InitialSetup from "./InitialSetup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnLoggedIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/initial-setup" element={<InitialSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
