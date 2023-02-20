function Section({ title, peoples }) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {peoples?.map((people) => (
          <li>{people}</li>
        ))}
      </ul>
    </>
  );
}

export default Section;
