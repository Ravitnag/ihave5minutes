import Goals from "./GoalsAreas";

const Home = () => {
  return (
    <>
      {user.isLoggedIn ? (
        <div className="text-slate-700 font-bold">
          <div className="text-6xl ">how much do you have ?</div>
          <div className="grid grid-cols-4 my-10 place-items-center">
            {Times.map((x, i) => (
              <div className="flex items-center justify-center w-20 h-10 rounded-3xl bg-gray-100 hover:bg-green-200  cursor-pointer" key={i}>
                {x.timeText}
              </div>
            ))}
          </div>
          <h2 className="text-6xl font-bold my-10"> Hi {userName} Which goal do you want to advance ?</h2>

          <div className="grid grid-cols-6 my-10 place-items-center">
            {Goals.map((g, i) => (
              <div
                onClick={getSuggestion}
                className="flex items-center justify-center w-30 h-10 rounded-3xl cursor-pointer hover:bg-green-200 bg-white transition px-5 gap-2">
                {g.goal} <img src={g.img} className="w-10 h-10" />
              </div>
            ))}
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
      ) : (
        <UnLoggedIn />
      )}
    </>
  );
};

export default Home;
