const InputGroup = ({ label, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <label htmlFor={type}>
        <p
          style={{ color: "#424242", fontFamily: "Arial", fontWeight: "bold" }}
        >
          {label}
        </p>
      </label>
      <input
        style={{
          padding: "0.5rem 1rem",
          outline: "none",
          border: "1px solid #999",
          borderRadius: "0.15rem",
          fontFamily: "Arial",
          color: "#777",
        }}
        type={type}
        name={type}
        id={type}
      />
    </div>
  );
};

export default InputGroup;
