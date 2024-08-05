const SectionWrapper = (props) => {
  const { children, header, title } = props;
  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center">
        <p className="font-medium uppercase">{header}</p>
        <p>
          {title[0]} <span> {title[1]} </span> {title[2]}
        </p>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
