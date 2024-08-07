import SectionWrapper from "./SectionWrapper";

const Workout = (props) => {
  const { workout } = props;
  return (
    <SectionWrapper header={"Welcome to"} title={["The", "Danger", "Zone"]}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => (
          <ExerciseCard />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
