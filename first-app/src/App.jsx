import React from "react";
import Button from "./components/button/Button";
import InputGroup from "./components/input-group/InputGroup";

function App() {
  return (
    <div
      style={{
        width: "50%",
        margin: "1rem auto",
        backgroundColor: "#fff",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <h3 style={{ color: "#222", fontSize: "2rem", fontFamily: "Arial" }}>
          Sign Up
        </h3>
        <p style={{ color: "#666", fontSize: "1rem", fontFamily: "Arial" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          debitis!
        </p>
      </div>
      <form>
        <InputGroup label="What is your name?" type="texgt" />
        <InputGroup label="What is your email?" type="email" />
        <InputGroup label="What is your password?" type="password" />

        <div>
          <Button type="reset" text="Reset" variant="error" size="small" />
          <Button type="submit" text="Submit" variant="primary" size="large" />
        </div>
      </form>
    </div>
  );
}

export default App;

/**
 * When we need components?
 * Ans : When we need to work with re-usable code then we need to create a component
 */
