// module css import that means only this Button.jsx file access this css file:
import classes from "./Button.module.css";

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
  console.log(userSize);

  return (
    <button
      className={classes.button}
      style={{
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
