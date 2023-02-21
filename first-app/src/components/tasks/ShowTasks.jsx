import { useState } from "react";
import Button from "../button/Button";

function ShowTasks({ tasks, setTasks }) {
  const handleDeleteBtn = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task")) {
      const task = tasks.filter((task) => task.id !== taskId);

      setTasks(task);
    }
  };

  return (
    <>
      {tasks?.length ? (
        <>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.text}

                <Button
                  type="submit"
                  text="X"
                  variant="error"
                  size="small"
                  onClick={() => handleDeleteBtn(task.id)}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>There is no task Here</p>
      )}
    </>
  );
}

export default ShowTasks;
