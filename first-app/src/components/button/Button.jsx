const colorVariant = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#000",
  },
  error: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  warning: {
    backgroundColor: "#ff9800",
    color: "#000",
  },
  info: {
    backgroundColor: "#80d8ff",
    color: "#000",
  },
};

const sizes = {
  small: {
    padding: "0.5rem 1rem",
  },
  medium: {
    padding: "1rem 2rem",
  },
  large: {
    padding: "1.5rem 3rem",
  },
};

const Button = ({ text, type, variant, size }) => {
  const userVariant = colorVariant[variant];
  const userSize = sizes[size];

  return (
    <button
      style={{
        padding: "1rem 2rem",
        fontSize: "0.9rem",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "1px",
        border: "none",
        marginRight: "1rem",
        cursor: "pointer",
        borderRadius: "0.15rem",
        ...userVariant,
        ...userSize,
      }}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
