const SectionWrapper = (props) => {
  const { children, header, title } = props;
  return (
    <section className="min-h0screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center"></div>
    </section>
  );
};

export default SectionWrapper;
