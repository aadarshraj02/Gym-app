import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/functions";

const App = () => {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscle, setMuscle] = useState([]);
  const [goals, setGoals] = useState("strength_power");

  function updateWorkout() {
    if (muscle.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);

    window.location.href = "#workout";
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscle={muscle}
        setMuscle={setMuscle}
        goal={goals}
        setGoal={setGoals}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
};

export default App;
