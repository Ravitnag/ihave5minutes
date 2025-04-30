import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import  areas  from "./GoalsAreas";
import { useEffect } from "react";

export default function GoalSelector({ goalArea, setGoalArea, errors }) {
  

    useEffect(()=>{
        console.log(goalArea)
    }, [goalArea]
    
    )
  const areasArray = Object.keys(areas)
    return (
    <div className="relative w-full  border-purple-400">
      <Listbox value={goalArea} onChange={setGoalArea}>
        <ListboxButton className={`w-full flex ${errors.goalArea? "!border-red-500" :"!border-purple-400"} justify-between items-center px-4 py-2 border rounded-xl bg-white  focus:outline-none focus:ring-2 focus:ring-purple-400 transition`}>
          <span>
            {goalArea ? (
              <>
                {areas[goalArea]}{" "}
                {goalArea.charAt(0).toUpperCase() + goalArea.slice(1)}
              </>
            ) : (
              "Select area"
            )}
          </span>
          {/* <ChevronUpDownIcon className="w-5 h-5 text-gray-400" /> */}
        </ListboxButton>

        <ListboxOptions className="absolute mt-2 w-full rounded-xl bg-white shadow-lg max-h-60 overflow-auto ring-1 ring-black/5 focus:outline-none">
          {areasArray.map(( area ) => (
            <ListboxOption
              key={area}
              value={area}
              className={({ active }) =>
                `cursor-pointer select-none relative px-4 py-2 rounded-xl ${
                  active ? "bg-purple-100 text-purple-900" : "text-gray-900"
                }`
              }
            >
              {({ selected }) => (
                <div className="flex items-center justify-between">
                  <span>
                    {areas[area]} {area.charAt(0).toUpperCase() + area.slice(1)}
                  </span>
                  {selected && <span>✔️</span>}
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
