import { useState } from "react";
import GoalSelector from "./GoalSelector";
import areas from "./GoalsAreas";
import { PlusIcon } from "@heroicons/react/24/solid";

const InitialSetup = () => {
  const [goalTitle, setGoalTitle] = useState("");
  const [goalArea, setGoalArea] = useState("");
  const [goals, setGoals] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [errors, setErrors] = useState({ goalTitle: "", goalArea: "" });

  const handleAddGoal = () => {
    if (goalTitle && goalArea) {
      setGoals([...goals, { id: Date.now(), title: goalTitle, area: goalArea }]);
      setGoalTitle("");
      setGoalArea("");
      setErrors({ goalTitle: "", goalArea: "" });
    } else {
      setErrors({
        goalTitle: goalTitle ? "" : "Goal title is required",
        goalArea: goalArea ? "" : "Goal area is required",
      });
    }
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const handleEditGoal = (id) => {
    const goal = goals.find((g) => g.id === id);
    setEditingId(id);
    setEditingTitle(goal.title);
  };

  const handleSaveEdit = (id) => {
    setGoals(goals.map((goal) => (goal.id === id ? { ...goal, title: editingTitle } : goal)));
    setEditingId(null);
    setEditingTitle("");
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6 w-4xl">
      <div className={`flex flex-col ${errors.goalTitle ? "" : "space-y-5"}`}>
        <input
          type="text"
          placeholder="Enter your goal"
          value={goalTitle}
          onChange={(e) => setGoalTitle(e.target.value)}
          className={`px-4 py-2 border ${errors.goalTitle ? "border-red-500" : "border-purple-400"} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300`}
        />
        {errors.goalTitle && <p className="text-red-500 text-sm text-left mb-4 ml-2">{errors.goalTitle}</p>}
        <div className="flex items-center space-x-2">
          <GoalSelector goalArea={goalArea} setGoalArea={setGoalArea}  errors={errors}/>

          <button onClick={handleAddGoal} className="p-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
            </svg>
          </button>
        </div>
        {errors.goalArea && <p className="text-red-500 text-sm text-left ml-2">{errors.goalArea}</p>}
      </div>

      {/* Goals List */}
      <ul className="space-y-4">
        {goals.map((goal) => (
          <li key={goal.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-xl">
            <div>
              {editingId === goal.id ? (
                <input value={editingTitle} onChange={(e) => setEditingTitle(e.target.value)} className="px-2 py-1 border rounded" />
              ) : (
                <>
                  <p className="font-semibold">{goal.title}</p>
                  <p className="text-sm text-gray-500">
                    Area: {goal.area} {areas[goal.area]}
                  </p>
                </>
              )}
            </div>

            <div className="flex space-x-2">
              {editingId === goal.id ? (
                <button onClick={() => handleSaveEdit(goal.id)} className="text-green-500 hover:underline text-sm">
                  Save
                </button>
              ) : (
                <button onClick={() => handleEditGoal(goal.id)} className="text-blue-500 hover:underline text-sm">
                  Edit
                </button>
              )}
              <button onClick={() => handleDeleteGoal(goal.id)} className="text-red-500 hover:underline text-sm">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InitialSetup;
