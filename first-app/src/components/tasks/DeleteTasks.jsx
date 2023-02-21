import Button from "../button/Button";

function DeleteTasks({ deleteAllTasks }) {
  return (
    <p style={{ marginTop: "1rem" }}>
      <Button
        text="Delete All Tasks"
        variant="error"
        type="submit"
        onClick={deleteAllTasks}
      />
    </p>
  );
}

export default DeleteTasks;
