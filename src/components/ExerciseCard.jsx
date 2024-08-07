import React from "react";

const ExerciseCard = (props) => {
  const { exercise } = props;
  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4 ">
        <h4 className="text-3xl hidden sm:inline smL:text-4xl md:text-5xl font-semibold text-slate-400">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
      </div>
    </div>
  );
};

export default ExerciseCard;
