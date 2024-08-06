const SectionWrapper = (props) => {
  const { children, header, title } = props;
  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center">
        <p className="font-medium uppercase">{header}</p>
        <p className="font-semibold text-3xl sm:text-4xl lg:text-6xl">
          {title[0]}{" "}
          <span className="text-blue-400 uppercase"> {title[1]} </span>{" "}
          {title[2]}
        </p>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
