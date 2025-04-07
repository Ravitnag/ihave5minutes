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
        console.log(res.data);
        
      } catch (err) {
        console.log(err.message);
      }
    };

    getGoals();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">מה בא לך לעשות היום?</h1>

      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="למשל: לסדר את התמונות"
        className="border rounded px-4 py-2 w-full mb-4"
      />

      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="כמה דקות יש לך עכשיו?"
        className="border rounded px-4 py-2 w-full mb-4"
      />

      <button onClick={getSuggestion} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        תציעי לי משהו להתחיל
      </button>

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
