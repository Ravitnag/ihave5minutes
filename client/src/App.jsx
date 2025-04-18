import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [time, setTime] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const getSuggestion = () => {
    if (!goal || !time) {
      setSuggestion("נא למלא גם מטרה וגם זמן פנוי 😊");
      return;
    }

    const short = ["כתבי 3 צעדים קטנים שיקדמו אותך", "עשי פעולה קצרה שתקדם אותך אפילו בקטנה", "רק התחילי – 2 דקות של מיקוד!"];
    const medium = ["קדמי חלק קטן מהמטרה – אפילו רק חצי משימה", "רשמי תוכנית פעולה זריזה והתחילי בשלב ראשון", "הקדישי זמן לסדר סביבתי שיתמוך במטרה"];
    const long = ["פני חצי שעה לעבודה רצינית – תני פוש!", "צללי למשימה ונסי לסיים חלק משמעותי", "הכיני לעצמך שלד או טיוטה – תתחילי לבנות"];

    let suggestion;
    if (time <= 5) {
      suggestion = short[Math.floor(Math.random() * short.length)];
    } else if (time <= 15) {
      suggestion = medium[Math.floor(Math.random() * medium.length)];
    } else {
      suggestion = long[Math.floor(Math.random() * long.length)];
    }

    setSuggestion(suggestion);
  };

  useEffect(() => {
    const getGoals = async () => {
      try {
        const res = await axios.get("/api/getGoals");
        setGoals(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getGoals();
  }, []);

  return (
    <div className="text-slate-700 font-bold">
      <div className="text-6xl ">
        how much do you have ?
      </div>
      <div className="grid grid-cols-4 my-10 place-items-center">
        {["5 min", "10 min", "15 min","custom"].map((x, i) => (
          <div className="flex items-center justify-center w-20 h-10 rounded-3xl bg-gray-100 hover:bg-green-200  cursor-pointer" key={i}>
          {x}
          </div>
        ))}
      </div>
      <h2 className="text-6xl font-bold my-10"> Which goal do you want to advance ?</h2>

 <div className="grid grid-cols-6 my-10 place-items-center">


      {["Health", "House", "Family", "Learning", "Work", "Other"].map((x,i)=>
      <div onClick={getSuggestion} className="flex items-center justify-center w-20 h-10 rounded-3xl cursor-pointer hover:bg-green-200 bg-white transition">
       {x}
      </div>)}
</div>
      {suggestion && (
        <div className="mt-6 bg-yellow-100 text-gray-800 p-4 rounded shadow">
          <p>
            <strong>מטרה:</strong> {goal}
          </p>
          <p className="mt-2">
            <strong>הצעה:</strong> {suggestion}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
