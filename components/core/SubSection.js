const SubSection = ({ children, heading }) => {
  return (
    <section className="my-20">
      <h2 className="text-3xl my-5">{heading}</h2>
      {children}
    </section>
  );
};

export default SubSection;
