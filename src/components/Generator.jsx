import SectionWrapper from "./SectionWrapper";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div>
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}

const Generator = () => {
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    ></SectionWrapper>
  );
};

export default Generator;
