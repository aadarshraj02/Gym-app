import { WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";
import { FaCaretDown } from "react-icons/fa";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-lg sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

const Generator = () => {
  let showModals = false;

  const toggleModal = () => {
    showModals = !showModals;
  };
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, index) => (
          <button
            key={index}
            className="bg-slate-950 border border-blue-400 py-2 rounded-lg hover:border-blue-600 duration-200"
          >
            <p className="capitalize">{type.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>
      <Header
        index={"02"}
        title={"Lock on Targets"}
        description={"Select the muscles judge for annihilation."}
      />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex items-center justify-center">
        <button
          onClick={toggleModal}
          className="relative flex items-center justify-center p-3"
        >
          <p>Select muscle groups</p>
          <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2" />
        </button>
        {showModals && <div></div>}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
