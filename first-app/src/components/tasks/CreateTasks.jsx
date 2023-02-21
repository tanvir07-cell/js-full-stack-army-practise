import { useState } from "react";
import Button from "../button/Button";
function CreateTasks({ addNewTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <p style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="type your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      {/* <button
        onClick={() => {
          alert(text);
        }}
      >
        Create Task
      </button> */}

      <Button
        text="Add task"
        variant="primary"
        type="submit"
        onClick={() => {
          if (text) {
            addNewTask(text);
            setText("");
          } else {
            alert("Please fill up the text field");
          }
        }}
      />
    </>
  );
}

export default CreateTasks;
